import dayjs from 'dayjs';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import {TYPES} from '../const.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

const BLANK_EVENT = {
  basePrice: 0,
  destination: '',
  isFavorite: false,
  offers: [],
  type: 'flight'
};

const getDestinationTemplate = (destinationInfo) => {
  if (!destinationInfo) {
    return null;
  }

  const {description, pictures} = destinationInfo;

  if (!description && !pictures.length) {
    return null;
  }

  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
      ${pictures.length ? `
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${pictures.map(({description: alt, src}) => `<img class="event__photo" src="${src}" alt="${alt}">`).join('')}
          </div>
        </div>
      ` : ''}
    </section>
  `;
};

const getDestinationsListTemplate = ({name}) => `<option value="${name}"></option>`;

const getOptionTemplate = ({id, title, price}, pointId, pointOffers, isDisabled) => `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}-${pointId}" type="checkbox" name="event-offer-${id}" value=${id} ${pointOffers.includes(id) ? 'checked' : ''}${isDisabled ? ' disabled' : ''}>
    <label class="event__offer-label" for="event-offer-${id}-${pointId}">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
`;

const getTypeTemplate = (type, isChecked, id, isDisabled) => `
  <div class="event__type-item">
    <input id="event-type-${type}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${isChecked ? 'checked' : ''}${isDisabled ? ' disabled' : ''} />
    <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-${id}">${type[0].toUpperCase()}${type.slice(1)}</label>
  </div>
`;

const createPointFormTemplate = (destinations, offersByType, point) => {
  const {id, basePrice, dateFrom, dateTo, destination, offers, type, isDisabled, isSaving, isDeleting} = point;
  const pointFrom = dateFrom ? dayjs(dateFrom) : '';
  const pointTo = dateTo ? dayjs(dateTo) : '';
  const isNew = !id;
  const destinationInfo = destinations.find((it) => destination === it.id);

  const isSubmitDisabled = pointFrom >= pointTo
    || !destination
    || !basePrice;

  const typesTemplate = TYPES.map((it) => getTypeTemplate(it, it === type, id, isDisabled)).join('');
  const destinationsListTemplate = destinations.map((it) => getDestinationsListTemplate(it)).join('');
  const optionsTemplate = offersByType.map((it) => getOptionTemplate(it, id, offers, isDisabled)).join('');
  const destinationTemplate = getDestinationTemplate(destinationInfo);

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox"${isDisabled ? ' disabled' : ''}>
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
            <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${destinationInfo ? destinationInfo.name : ''}" list="destination-list-${id}"${isDisabled ? ' disabled' : ''}>
            <datalist id="destination-list-${id}">
              ${destinationsListTemplate}
            </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${id}">From</label>
            <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${pointFrom ? `${pointFrom.format('DD/MM/YY HH:mm')}` : ''}"${isDisabled ? ' disabled' : ''}>
            &mdash;
            <label class="visually-hidden" for="event-end-time-${id}">To</label>
            <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${pointTo ? `${pointTo.format('DD/MM/YY HH:mm')}` : ''}"${isDisabled ? ' disabled' : ''}>
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-${id}">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${basePrice}"${isDisabled ? ' disabled' : ''}>
          </div>
          <button class="event__save-btn  btn  btn--blue" type="submit"${isSubmitDisabled || isDisabled ? ' disabled' : ''}>
            ${isSaving ? 'Saving...' : 'Save'}
          </button>
          <button class="event__reset-btn" type="reset"${isDeleting ? ' disabled' : ''}>
            ${isNew ? 'Cancel' : `${isDeleting ? 'Deleting...' : 'Delete'}`}
          </button>
          ${!isNew ? `
            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          ` : ''}
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
            ${destinationTemplate ?? ''}
          </section>
          ` : ''}
      </form>
    </li>
  `;
};

export default class PointFormView extends AbstractStatefulView {
  #destinations = null;
  #offers = null;
  #point = null;
  #datepickers = new Map();
  #handleFormSubmit = null;
  #handleDeleteClick = null;
  #handleFormRollupClick = null;

  constructor({destinations, offers, onFormSubmit, onDeleteClick, onFormRollupClick, point = BLANK_EVENT}) {
    super();
    this.#destinations = destinations;
    this.#offers = offers;
    this.#point = point;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleDeleteClick = onDeleteClick;
    this.#handleFormRollupClick = onFormRollupClick;

    this._setState(PointFormView.parsePointToState(this.#point));
    this._restoreHandlers();
  }

  get template() {
    const offersByType = this._state.type ? this.#offers.find((it) => it.type === this._state.type).offers : [];

    return createPointFormTemplate(this.#destinations, offersByType, this._state);
  }

  removeElement() {
    super.removeElement();
    this.#destroyDatepickers();
  }

  _restoreHandlers() {
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#deleteClickHandler);
    this.element.querySelector('.event__rollup-btn')?.addEventListener('click', this.#rollupClickHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__input--price').addEventListener('keydown', this.#priceKeydownHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceInputHadler);
    this.element.querySelector('.event__available-offers')?.addEventListener('change', this.#offersChangeHandler);
    this.#setDatepickers();
  }

  reset(point) {
    this.updateElement(
      PointFormView.parsePointToState(point)
    );
  }

  #setDatepicker(selector, defaultDate) {
    const isDateFrom = /start/.test(selector);

    return flatpickr(
      this.element.querySelector(selector),
      {
        dateFormat: 'd/m/y H:i',
        defaultDate,
        enableTime: true,
        onClose: this.#dateChangeHandler,
        [isDateFrom ? 'maxDate' : 'minDate']: isDateFrom ? this._state.dateTo : this._state.dateFrom
      }
    );
  }

  #setDatepickers() {
    this.#destroyDatepickers();
    this.#datepickers.set('dateFrom', this.#setDatepicker('[name="event-start-time"]', this._state.dateFrom));
    this.#datepickers.set('dateTo', this.#setDatepicker('[name="event-end-time"]', this._state.dateTo));
  }

  #destroyDatepickers() {
    this.#datepickers.forEach((it) => {
      it.destroy();
    });

    this.#datepickers.clear();
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(PointFormView.parseStateToPoint(this._state));
  };

  #deleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(PointFormView.parseStateToPoint(this._state));
  };

  #rollupClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormRollupClick();
  };

  #typeChangeHandler = (evt) => {
    if (!evt.target.classList.contains('event__type-input')) {
      return;
    }

    evt.preventDefault();
    this.updateElement({
      type: evt.target.value,
      offers: []
    });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();

    if (evt.target.value) {
      const destinationInfo = this.#destinations.find((it) => it.name === evt.target.value);
      const destination = destinationInfo ? destinationInfo.id : '';

      this.updateElement({
        destination
      });
    }
  };

  #priceKeydownHandler = (evt) => {
    if (!isNaN(evt.key) || evt.key === 'Backspace' || evt.key === 'Delete' || evt.key === 'Tab') {
      return;
    }

    evt.preventDefault();
  };

  #priceInputHadler = (evt) => {
    const newValue = evt.target.value;
    const isValueValid = !isNaN(newValue) && newValue > 0;
    const submitButton = this.element.querySelector('.event__save-btn');

    if (isValueValid) {
      this._setState({
        basePrice: Number(newValue)
      });
    }

    submitButton.disabled = !isValueValid;
  };

  #offersChangeHandler = (evt) => {
    if (!evt.target.classList.contains('event__offer-checkbox')) {
      return;
    }

    const chosenOffers = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked')).map((it) => it.value);

    this._setState({
      offers: chosenOffers
    });
  };

  #dateChangeHandler = ([userDate], dateString, {element}) => {
    const dateFrom = element.name === 'event-start-time' ? userDate.toISOString() : this._state.dateFrom;
    const dateTo = element.name === 'event-end-time' ? userDate.toISOString() : this._state.dateTo;

    this.updateElement({
      dateFrom,
      dateTo
    });
  };

  static parsePointToState(point) {
    return {
      ...point,
      isDisabled: false,
      isSaving: false,
      isDeleting: false
    };
  }

  static parseStateToPoint(state) {
    const point = {...state};

    delete point.isDisabled;
    delete point.isSaving;
    delete point.isDeleting;

    return point;
  }
}
