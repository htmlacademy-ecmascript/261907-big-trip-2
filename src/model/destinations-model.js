import {DESTINATIONS} from '../mock/data.js';
import Observable from '../framework/observable.js';

export default class DestinationsModel extends Observable {
  #destinations = DESTINATIONS;

  get destinations() {
    return this.#destinations;
  }
}
