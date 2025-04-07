import {UpdateType} from '../const.js';
import Observable from '../framework/observable.js';

export default class AbstractModel extends Observable {
  #type = null;
  _items = [];
  _apiService = null;

  constructor({apiService, type}) {
    super();
    this.#type = type;
    this._apiService = apiService;
  }

  get items() {
    return this._items;
  }

  async init() {
    try {
      const items = await this._apiService.items;

      this._items = items;
    } catch(err) {
      this._items = [];
    }

    this._notify(UpdateType.INIT, this.#type);
  }
}
