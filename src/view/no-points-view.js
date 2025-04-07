import {Filters} from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

const NoPointsNotification = {
  [Filters.EVERYTHING]: 'Click New Event to create your first point',
  [Filters.FUTURE]: 'There are no future events now',
  [Filters.PRESENT]: 'There are no present events now',
  [Filters.PAST]: 'There are no past events now'
};

const createNoPointsTemplate = (filterType) => `<p class="trip-events__msg">${NoPointsNotification[filterType]}</p>`;

export default class NoPointView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointsTemplate(this.#filterType);
  }
}
