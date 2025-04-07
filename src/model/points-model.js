import {sortDay} from '../utils/trip.js';
import AbstractModel from './abstract-model.js';

export default class PointsModel extends AbstractModel {
  get points() {
    return this.items.map(this.#adaptToClient);
  }

  addPoint(updateType, update) {
    this._items.push(update);
    this._items.sort(sortDay);

    this._notify(updateType, update);
  }

  async updatePoint(updateType, update) {
    const index = this._items.findIndex((it) => it.id === update.id);

    if (index < 0) {
      throw new Error('Point to update was not found.');
    }

    try {
      const response = await this._apiService.updatePoint(update);
      const updatedPoint = this.#adaptToClient(response);

      this._items = [
        ...this._items.slice(0, index),
        updatedPoint,
        ...this._items.slice(index + 1)
      ];

      this._notify(updateType, update);
    } catch(err) {
      throw new Error('Could not update point!');
    }
  }

  deletePoint(updateType, update) {
    const index = this._items.findIndex((it) => it.id === update.id);

    if (index < 0) {
      throw new Error('Point to delete was not found.');
    }

    this._items = [
      ...this._items.slice(0, index),
      ...this._items.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  #adaptToClient(point) {
    if (!point['base_price']) {
      return point;
    }

    const adaptedPoint = {
      ...point,
      basePrice: point['base_price'],
      dateFrom: point['date_from'],
      dateTo: point['date_to'],
      isFavorite: point['is_favorite']
    };

    delete adaptedPoint['base_price'];
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  }
}
