import AbstractModel from './abstract-model';

export default class OffersModel extends AbstractModel {
  get offers() {
    return this._items;
  }
}
