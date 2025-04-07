import AbstractModel from './abstract-model';

export default class DestinationsModel extends AbstractModel {
  get destinations() {
    return this.items;
  }
}
