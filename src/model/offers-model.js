import {offers} from '../mock/data.js';
import Observable from '../framework/observable.js';

export default class OffersModel extends Observable {
  #offers = offers;

  get offers() {
    return this.#offers;
  }
}
