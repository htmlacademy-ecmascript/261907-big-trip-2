import {sortDay} from '../utils/trip.js';
import AbstractModel from './abstract-model.js';

export default class PointsModel extends AbstractModel {
  get points() {
    return this._items.map(this.#adaptToClient);
  }

  async addPoint(updateType, update) {
    try {
      const response = await this._apiService.addPoint(update);
      const newPoint = this.#adaptToClient(response);

      this._items.push(newPoint);
      this._items.sort(sortDay);
      this._notify(updateType, update);
    } catch(err) {
      throw new Error('Could not add point!');
    }
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

  async deletePoint(updateType, update) {
    const index = this._items.findIndex((it) => it.id === update.id);

    if (index < 0) {
      throw new Error('Point to delete was not found.');
    }

    try {
      await this._apiService.deletePoint(update);

      this._items = [
        ...this._items.slice(0, index),
        ...this._items.slice(index + 1)
      ];

      this._notify(updateType);
    } catch(err) {
      throw new Error('Could not delete point!');
    }
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
