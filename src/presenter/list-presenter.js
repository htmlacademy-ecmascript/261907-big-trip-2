import {render} from '../framework/render.js';
import {SortType} from '../const.js';
import {updateItem} from '../utils/common.js';
import {sortDay, sortPrice, sortTime} from '../utils/trip.js';
import SortView from '../view/sort-view.js';
import NoPointView from '../view/no-points-view.js';
import TripPointsListView from '../view/trip-points-list-view.js';
import TripHeaderPresenter from './trip-header-presenter.js';
import PointPresenter from './point-presenter.js';

export default class ListPresenter {
  #pointsModel = null;
  #destinations = [];
  #offers = [];
  #points = [];
  #pointsPresenters = new Map();
  #tripHeaderPresenter = null;
  #currentSortType = SortType.DAY;
  #noPointsComponent = new NoPointView();
  #sortComponent = null;
  #pointsListComponent = new TripPointsListView();
  #header = null;
  #main = null;

  constructor({header, main, pointsModel}) {
    this.#header = header;
    this.#main = main;
    this.#pointsModel = pointsModel;
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#renderList();
  }

  #handlePointUpdate = (updatedPoint, hasHeaderDataChanged = false) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointsPresenters.get(updatedPoint.id).init(updatedPoint);

    if (hasHeaderDataChanged) {
      this.#tripHeaderPresenter.init(this.#points);
    }
  };

  #handleModeChange = () => {
    this.#pointsPresenters.forEach((it) => {
      it.resetView();
    });
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPoints();
    this.#renderPoints();
  };

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.TIME:
        this.#points.sort(sortTime);

        break;
      case SortType.PRICE:
        this.#points.sort(sortPrice);

        break;
      default:
        this.#points.sort(sortDay);
    }

    this.#currentSortType = sortType;
  }

  #renderList() {
    if (!this.#points.length) {
      this.#renderNoPoints();

      return;
    }

    this.#renderTripHeader();
    this.#renderSort();
    this.#renderPoints();
  }

  #renderNoPoints() {
    render(this.#noPointsComponent, this.#main);
  }

  #renderTripHeader() {
    this.#tripHeaderPresenter = new TripHeaderPresenter({
      destinations: this.#destinations,
      offers: this.#offers,
      container: this.#header
    });

    this.#tripHeaderPresenter.init(this.#points);
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#main);
  }

  #renderPoints() {
    render(this.#pointsListComponent, this.#main);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      destinations: this.#destinations,
      offers: this.#offers,
      pointsContainer: this.#pointsListComponent.element,
      onDataUpdate: this.#handlePointUpdate,
      onModeChange: this.#handleModeChange
    });

    pointPresenter.init(point);
    this.#pointsPresenters.set(point.id, pointPresenter);
  }

  #clearPoints() {
    this.#pointsPresenters.forEach((it) => {
      it.destroy();
    });

    this.#pointsPresenters.clear();
  }
}
