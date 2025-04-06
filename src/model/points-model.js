import {createPoint} from '../mock/data.js';
import {sortDay} from '../utils/trip.js';
import Observable from '../framework/observable.js';

const POINTS_COUNT = 4;

export default class PointsModel extends Observable {
  #points = Array.from({length: POINTS_COUNT}, createPoint);

  get points() {
    return this.#points;
  }

  addPoint(updateType, update) {
    this.#points.push(update);
    this.#points.sort(sortDay);

    this._notify(updateType, update);
  }

  updatePoint(updateType, update) {
    const index = this.#points.findIndex((it) => it.id === update.id);

    if (index < 0) {
      throw new Error('Point to update was not found.');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this.#points.findIndex((it) => it.id === update.id);

    if (index < 0) {
      throw new Error('Point to delete was not found.');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1)
    ];

    this._notify(updateType, update);
  }
}
