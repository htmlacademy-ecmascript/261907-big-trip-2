import {RenderPosition, render, replace} from '../framework/render.js';
import TripPointsListView from '../view/trip-points-list-view.js';
import TripHeaderView from '../view/trip-header-view.js';
import SortView from '../view/sort-view.js';
import PointFormView from '../view/point-form.js';
import PointView from '../view/point-view.js';
import NoPointView from '../view/no-points-view.js';

export default class ListPresenter {
  #pointsModel = null;
  #destinations = null;
  #offers = null;
  #listPoints = null;
  #header = null;
  #main = null;
  #pointsList = new TripPointsListView();

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
      render(new NoPointView(), this.#main);
    }

    this.#renderTripHeader();
    render(new SortView(), this.#main);
    render(this.#pointsList, this.#main);

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

    const pointComponent = new PointView({
      destination,
      offers: filteredOffers,
      point,
      onRollupClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', ecsKeydownHandler);
      }
    });

    const pointFormComponent = new PointFormView({
      destinations: this.#destinations,
      offersList: offersByType,
      point,
      onFormSubmit: closeForm,
      onRollupClick: closeForm
    });

    function replacePointToForm() {
      replace(pointFormComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointFormComponent);
    }

    render(pointComponent, this.#pointsList.element);
  }
}
