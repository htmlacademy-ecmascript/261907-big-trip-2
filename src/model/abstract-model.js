import {UpdateType} from '../const.js';
import Observable from '../framework/observable.js';

export default class AbstractModel extends Observable {
  #type = null;
  #items = [];
  _apiService = null;

  constructor({apiService, type}) {
    super();
    this.#type = type;
    this._apiService = apiService;
  }

  get items() {
    return this.#items;
  }

  set items(items) {
    this.#items = items;
  }

  async init() {
    try {
      const items = await this._apiService.items;

      this.items = items;
      this._notify(UpdateType.INIT, this.#type);
    } catch(err) {
      this.items = [];
      this._notify(UpdateType.ERROR);
    }
  }
}
