import {render} from '../framework/render.js';
import {updateItem} from '../utils/common.js';
import SortView from '../view/sort-view.js';
import NoPointView from '../view/no-points-view.js';
import TripPointsListView from '../view/trip-points-list-view.js';
import TripHeaderPresenter from './trip-header-presenter.js';
import PointPresenter from './point-presenter.js';

export default class ListPresenter {
  #pointsModel = null;
  #points = [];
  #pointsPresenters = new Map();
  #tripHeaderPresenter = null;
  #noPointsComponent = new NoPointView();
  #sortComponent = new SortView();
  #pointsListComponent = new TripPointsListView();
  #header = null;
  #main = null;

  constructor({header, main, pointsModel}) {
    this.#header = header;
    this.#main = main;
    this.#pointsModel = pointsModel;
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
      pointsModel: this.#pointsModel,
      container: this.#header
    });

    this.#tripHeaderPresenter.init(this.#points);
  }

  #renderSort() {
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
      pointsModel: this.#pointsModel,
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
