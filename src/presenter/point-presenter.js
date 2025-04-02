import {render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form.js';

export default class PointPresenter {
  #destinations = [];
  #offers = [];
  #point = null;
  #pointComponent = null;
  #pointFormComponent = null;
  #pointsContainer = null;

  constructor({pointsModel, pointsContainer}) {
    this.#destinations = [...pointsModel.destinations];
    this.#offers = [...pointsModel.offers];
    this.#pointsContainer = pointsContainer;
  }

  init(point) {
    this.#point = point;

    const destination = this.#destinations.find((it) => it.id === this.#point.destination);
    const offersByType = this.#offers.find((it) => it.type === this.#point.type).offers;
    const pointOffers = offersByType.filter((it) => this.#point.offers.includes(it.id));

    this.#pointComponent = new PointView({
      destination,
      offers: pointOffers,
      point: this.#point,
      onRollupClick: this.#handleRollupClick
    });

    this.#pointFormComponent = new PointFormView({
      destinations: this.#destinations,
      offersList: offersByType,
      point: this.#point,
      onFormSubmit: this.#handleFormSubmit,
      onFormRollupClick: this.#handleFormRollupClick
    });

    render(this.#pointComponent, this.#pointsContainer);
  }

  #replacePointToForm() {
    replace(this.#pointFormComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#ecsKeydownHandler);
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointFormComponent);
    document.removeEventListener('keydown', this.#ecsKeydownHandler);
  }

  #ecsKeydownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #handleRollupClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  };

  #handleFormRollupClick = () => {
    this.#replaceFormToPoint();
  };
}
