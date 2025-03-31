import {RenderPosition, render, replace} from '../framework/render.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripHeaderView from '../view/trip-header-view.js';
import SortView from '../view/sort-view.js';
import EventFormView from '../view/event-form.js';
import EventView from '../view/event-view.js';
import NoEventView from '../view/no-events-view.js';

export default class ListPresenter {
  #pointsModel = null;
  #destinations = null;
  #offers = null;
  #listPoints = null;
  #header = null;
  #main = null;
  #eventsList = new TripEventsListView();

  constructor({header, main, pointsModel}) {
    this.#header = header;
    this.#main = main;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];
    this.#listPoints = [...this.#pointsModel.points];

    this.#renderList();
  }

  #renderList() {
    if (!this.#listPoints.length) {
      render(new NoEventView(), this.#main);
    }

    this.#renderTripHeader();
    render(new SortView(), this.#main);
    render(this.#eventsList, this.#main);

    for (let i = 0; i < this.#listPoints.length; i++) {
      this.#renderPoint(this.#listPoints[i]);
    }
  }

  #getBasePrices() {
    return this.#listPoints.map((point) => point.basePrice);
  }

  #getOffersPrices(point) {
    const offersByType = this.#offers.find((it) => it.type === point.type).offers;
    const offersPrices = point.offers.map((id) => offersByType.find((it) => id === it.id).price);

    return offersPrices;
  }

  #renderTripHeader() {
    const route = this.#listPoints
      .map((point) => point.destination)
      .filter((destination, i, destinations) => i === 0 || destination !== destinations[i - 1])
      .map((id) => this.#destinations.find((it) => it.id === id).name)
      .join(' — ');

    const dates = [this.#listPoints[0].dateFrom, this.#listPoints[this.#listPoints.length - 1].dateTo];

    const sum = this.#listPoints
      .map((point) => this.#getOffersPrices(point))
      .flat()
      .concat(this.#getBasePrices())
      .reduce((partialSum, it) => partialSum + Number(it), 0);

    const tripHeaderComponent = new TripHeaderView({route, dates, sum});

    render(tripHeaderComponent, this.#header, RenderPosition.AFTERBEGIN);
  }

  #renderPoint(point) {
    const destination = this.#destinations.find((it) => it.id === point.destination);
    const offersByType = this.#offers.find((it) => it.type === point.type).offers;
    const filteredOffers = offersByType.filter((it) => point.offers.includes(it.id));

    const ecsKeydownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', ecsKeydownHandler);
      }
    };

    const closeForm = () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', ecsKeydownHandler);
    };

    const eventComponent = new EventView({
      destination,
      offers: filteredOffers,
      point,
      onRollupClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', ecsKeydownHandler);
      }
    });

    const eventFormComponent = new EventFormView({
      destinations: this.#destinations,
      offersList: offersByType,
      point,
      onFormSubmit: closeForm,
      onRollupClick: closeForm
    });

    function replacePointToForm() {
      replace(eventFormComponent, eventComponent);
    }

    function replaceFormToPoint() {
      replace(eventComponent, eventFormComponent);
    }

    render(eventComponent, this.#eventsList.element);
  }
}
