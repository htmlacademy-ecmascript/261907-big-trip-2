import {RenderPosition, remove, render, replace} from '../framework/render.js';
import {extractRoute, findSum} from '../utils/trip.js';
import TripHeaderView from '../view/trip-header-view.js';

export default class TripHeaderPresenter {
  #destinations = [];
  #offers = [];
  #points = [];
  #tripHeaderComponent = null;
  #container = null;

  constructor({pointsModel, container}) {
    this.#destinations = [...pointsModel.destinations];
    this.#offers = [...pointsModel.offers];
    this.#container = container;
  }

  init(points) {
    this.#points = points;

    const route = extractRoute(this.#destinations, this.#points);
    const dates = [this.#points[0].dateFrom, this.#points[this.#points.length - 1].dateTo];
    const sum = findSum(this.#offers, this.#points);
    const prevTripHeaderComponent = this.#tripHeaderComponent;

    this.#tripHeaderComponent = new TripHeaderView({route, dates, sum});

    if (prevTripHeaderComponent === null) {
      render(this.#tripHeaderComponent, this.#container, RenderPosition.AFTERBEGIN);
    } else {
      replace(this.#tripHeaderComponent, prevTripHeaderComponent);
    }

    remove(prevTripHeaderComponent);
  }
}
