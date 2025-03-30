import {DESTINATIONS, createPoint, offers} from '../mock/data.js';

const POINTS_COUNT = 4;

export default class PointsModel {
  #destinations = DESTINATIONS;
  #offers = offers;
  #points = Array.from({length: POINTS_COUNT}, createPoint);

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  get points() {
    return this.#points;
  }
}
