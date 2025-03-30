import {RenderPosition, render, replace} from '../framework/render.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripHeaderView from '../view/trip-header-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import EventFormView from '../view/event-form.js';
import EventView from '../view/event-view.js';

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
    render(new TripHeaderView(), this.#header, RenderPosition.AFTERBEGIN);
    render(new FiltersView(), this.#header.querySelector('.trip-controls__filters'));
    render(new SortView(), this.#main);
    render(this.#eventsList, this.#main);

    for (let i = 0; i < this.#listPoints.length; i++) {
      this.#renderPoint(this.#listPoints[i]);
    }
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
