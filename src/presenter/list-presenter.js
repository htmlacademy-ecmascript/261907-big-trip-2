import {render} from '../framework/render.js';
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
  #header = null;
  #main = null;
  #noPointsComponent = new NoPointView();
  #sortComponent = new SortView();
  #pointsListComponent = new TripPointsListView();

  constructor({header, main, pointsModel}) {
    this.#header = header;
    this.#main = main;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#renderList();
  }

  #renderList() {
    if (!this.#points.length) {
      this.#renderNoPoints();

      return;
    }

    this.#renderTripHeader(this.#points);
    this.#renderSort();
    this.#renderPoints();
  }

  #renderNoPoints() {
    render(this.#noPointsComponent, this.#main);
  }

  #renderTripHeader(points) {
    const tripHeaderPresenter = new TripHeaderPresenter({
      pointsModel: this.#pointsModel,
      container: this.#header
    });

    tripHeaderPresenter.init(points);
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
      pointsContainer: this.#pointsListComponent.element
    });

    pointPresenter.init(point);
  }
}
