import dayjs from 'dayjs';
import {TYPES} from '../const.js';
import {getDefaultDate, getRandomArrayElement} from '../utils.js';
import {createElement} from '../render.js';

const BLANK_EVENT = {
  id: 0,
  basePrice: '',
  dateFrom: getDefaultDate(),
  dateTo: getDefaultDate(),
  destination: '',
  isFavorite: 0,
  offers: [],
  type: getRandomArrayElement(TYPES)
};

function getDestinationTemplate({description, pictures}) {
  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${pictures.map(({description: alt, src}) => `<img class="event__photo" src="${src}" alt="${alt}">`).join('')}
        </div>
      </div>
    </section>
  `;
}

function getDestinationsListTemplate({name}) {
  return `<option value="${name}"></option>`;
}

function getOptionTemplate({id, title, price}, eventId, eventOffers) {
  return `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}-${eventId}" type="checkbox" name="event-offer-${id}" ${eventOffers.includes(id)}>
      <label class="event__offer-label" for="event-offer-${id}-${eventId}">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>
  `;
}

function getTypeTemplate (type, isChecked, id) {
  const lowerCaseType = type.toLowerCase();

  return `
    <div class="event__type-item">
      <input id="event-type-${lowerCaseType}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${lowerCaseType}" ${isChecked ? 'checked' : ''} />
      <label class="event__type-label  event__type-label--${lowerCaseType}" for="event-type-${lowerCaseType}-${id}">${type}</label>
    </div>
  `;
}

function createEventFormTemplate(destinations, offersList, point) {
  const {id, basePrice, dateFrom, dateTo, destination, offers, type} = point;
  const pointFrom = dayjs(dateFrom);
  const pointTo = dayjs(dateTo);
  const isNew = destination === '';
  const destinationInfo = destinations.find((it) => destination === it.id);

  const typesTemplate = TYPES.map((it) => getTypeTemplate(it, it === type, id)).join('');
  const destinationsListTemplate = destinations.map((it) => getDestinationsListTemplate(it)).join('');
  const optionsTemplate = offersList.map((it) => getOptionTemplate(it, id, offers)).join('');
  const destinationTemplate = destinationInfo ? getDestinationTemplate(destinationInfo) : '';

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${typesTemplate}
              </fieldset>
            </div>
          </div>
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-${id}">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${destinationInfo ? destinationInfo.name : ''}" list="destination-list-${id}">
            <datalist id="destination-list-${id}">
              ${destinationsListTemplate}
            </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${id}">From</label>
            <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${pointFrom.format('DD/MM/YY HH:mm')}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-${id}">To</label>
            <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${pointTo.format('DD/MM/YY HH:mm')}">
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-${id}">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${basePrice}">
          </div>
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">${isNew ? 'Cancel' : 'Delete'}</button>
        </header>
        ${optionsTemplate || destinationTemplate ? `
          <section class="event__details">
            ${optionsTemplate ? `
              <section class="event__section  event__section--offers">
                <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                <div class="event__available-offers">
                  ${optionsTemplate}
                </div>
              </section>
            ` : ''}
            ${destinationTemplate ? `
              ${destinationTemplate}
            ` : ''}
          </section>
          ` : ''}
      </form>
    </li>
  `;
}

export default class EventFormView {
  constructor({destinations, offersList, point = BLANK_EVENT}) {
    this.destinations = destinations;
    this.offersList = offersList;
    this.point = point;
  }

  getTemplate() {
    return createEventFormTemplate(this.destinations, this.offersList, this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
