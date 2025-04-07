import {remove, render} from '../framework/render.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';
import {Filters, SortType, UpdateType, UserAction} from '../const.js';
import {filter} from '../utils/filter.js';
import {sortDay, sortPrice, sortTime} from '../utils/trip.js';
import LoadingView from '../view/loading-view.js';
import SortView from '../view/sort-view.js';
import NoPointView from '../view/no-points-view.js';
import TripPointsListView from '../view/trip-points-list-view.js';
import TripHeaderPresenter from './trip-header-presenter.js';
import NewPointPresenter from './new-point-presenter.js';
import PointPresenter from './point-presenter.js';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000
};

export default class ListPresenter {
  #filtersModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #tripHeaderPresenter = null;
  #newPointPresenter = null;
  #pointsPresenters = new Map();
  #currentSortType = SortType.DAY;
  #filterType = Filters.EVERYTHING;
  #loadedDataTypes = new Set();
  #isLoading = true;
  #loadingComponent = new LoadingView();
  #noPointsComponent = null;
  #sortComponent = null;
  #pointsListComponent = new TripPointsListView();
  #header = null;
  #main = null;
  #handleNewPointDestroy = null;

  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  constructor({header, main, filtersModel, destinationsModel, offersModel, pointsModel, onNewPointDestroy}) {
    this.#header = header;
    this.#main = main;
    this.#filtersModel = filtersModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;
    this.#handleNewPointDestroy = onNewPointDestroy;

    this.#destinationsModel.addObserver(this.#handleModelEvent);
    this.#offersModel.addObserver(this.#handleModelEvent);
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filtersModel.addObserver(this.#handleModelEvent);
  }

  get destinations() {
    return this.#destinationsModel.destinations;
  }

  get offers() {
    return this.#offersModel.offers;
  }

  get points() {
    this.#filterType = this.#filtersModel.filter;

    const points = this.#pointsModel.points;
    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.TIME:
        return filteredPoints.sort(sortTime);
      case SortType.PRICE:
        return filteredPoints.sort(sortPrice);
    }

    return filteredPoints.sort(sortDay);
  }

  get tripPoints() {
    return this.#pointsModel.points.sort(sortDay);
  }

  init() {
    this.#renderPoints();
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filtersModel.setFilter(UpdateType.MAJOR, Filters.EVERYTHING);
    this.#newPointPresenter.init();
  }

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();

    this.#pointsPresenters.forEach((it) => {
      it.resetView();
    });
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearPoints();
    this.#renderPoints();
  };

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();

        try {
          await this.#pointsModel.addPoint(updateType, update);
        } catch(err) {
          this.#newPointPresenter.setAborting();
        }

        break;
      case UserAction.UPDATE_POINT:
        this.#pointsPresenters.get(update.id).setSaving();

        try {
          await this.#pointsModel.updatePoint(updateType, update);
        } catch(err) {
          this.#pointsPresenters.get(update.id).setAborting();
        }

        break;
      case UserAction.DELETE_POINT:
        this.#pointsPresenters.get(update.id).setDeleting();

        try {
          await this.#pointsModel.deletePoint(updateType, update);
        } catch(err) {
          this.#pointsPresenters.get(update.id).setAborting();
        }

        break;
    }

    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointsPresenters.get(data.id).init(data);
        this.#pointsPresenters.get(data.id).resetView();

        break;
      case UpdateType.MINOR:
        this.#pointsPresenters.get(data.id).init(data);
        this.#pointsPresenters.get(data.id).resetView();
        this.#tripHeaderPresenter.init(this.tripPoints);

        break;
      case UpdateType.MEDIUM:
        this.#clearPoints();
        this.#renderPoints();

        break;
      case UpdateType.MAJOR:
        this.#clearPoints({resetSortType: true});
        this.#renderPoints({resetSortType: true});

        break;
      case UpdateType.INIT:
        this.#loadedDataTypes.add(data);

        if (this.#loadedDataTypes.size === 3) {
          this.#isLoading = false;
          remove(this.#loadingComponent);

          this.#newPointPresenter = new NewPointPresenter({
            destinations: this.destinations,
            offers: this.offers,
            pointsContainer: this.#pointsListComponent.element,
            onDataUpdate: this.#handleViewAction,
            onDestroy: this.#handleNewPointDestroy
          });

          this.#renderPoints();
        }

        break;
    }
  };

  #renderLoading() {
    render(this.#loadingComponent, this.#main);
  }

  #renderNoPoints() {
    this.#noPointsComponent = new NoPointView({
      filterType: this.#filterType
    });

    render(this.#noPointsComponent, this.#main);
  }

  #renderTripHeader() {
    this.#tripHeaderPresenter = new TripHeaderPresenter({
      destinations: this.destinations,
      offers: this.offers,
      container: this.#header
    });

    this.#tripHeaderPresenter.init(this.tripPoints);
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#main);
  }

  #renderPoints({resetSortType = false} = {}) {
    if (this.#isLoading) {
      this.#renderLoading();

      return;
    }

    if (!this.points.length) {
      this.#renderNoPoints();

      if (this.tripPoints.length) {
        this.#tripHeaderPresenter.init(this.tripPoints);
      }

      return;
    }

    if (!this.#tripHeaderPresenter) {
      this.#renderTripHeader();
    } else {
      this.#tripHeaderPresenter.init(this.tripPoints);
    }

    if (!this.#sortComponent || resetSortType) {
      this.#renderSort();
    }

    render(this.#pointsListComponent, this.#main);

    this.points.forEach((it) => {
      this.#renderPoint(it);
    });
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      destinations: this.destinations,
      offers: this.offers,
      pointsContainer: this.#pointsListComponent.element,
      onDataUpdate: this.#handleViewAction,
      onModeChange: this.#handleModeChange
    });

    pointPresenter.init(point);
    this.#pointsPresenters.set(point.id, pointPresenter);
  }

  #clearPoints({resetSortType = false} = {}) {
    this.#newPointPresenter.destroy();

    this.#pointsPresenters.forEach((it) => {
      it.destroy();
    });

    this.#pointsPresenters.clear();
    remove(this.#loadingComponent);

    if (this.#noPointsComponent) {
      remove(this.#noPointsComponent);
    }

    if (!this.tripPoints.length) {
      this.#tripHeaderPresenter.destroy();
    }

    if (!this.points.length || resetSortType) {
      this.#currentSortType = SortType.DAY;
      remove(this.#sortComponent);
    }
  }
}
