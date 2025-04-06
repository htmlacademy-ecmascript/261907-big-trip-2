import {Filters} from '../const.js';
import Observable from '../framework/observable.js';

export default class FiltersModel extends Observable {
  #filter = Filters.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  setFilter(UpdateType, filter) {
    this.#filter = filter;
    this._notify(UpdateType, filter);
  }
}
