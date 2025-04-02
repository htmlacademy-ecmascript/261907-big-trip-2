import {remove, render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form.js';

export default class PointPresenter {
  #destinations = [];
  #offers = [];
  #point = null;
  #pointComponent = null;
  #pointFormComponent = null;
  #pointsContainer = null;
  #handleDataUpdate = null;

  constructor({pointsModel, pointsContainer, onDataUpdate}) {
    this.#destinations = [...pointsModel.destinations];
    this.#offers = [...pointsModel.offers];
    this.#pointsContainer = pointsContainer;
    this.#handleDataUpdate = onDataUpdate;
  }

  init(point) {
    this.#point = point;

    const destination = this.#destinations.find((it) => it.id === this.#point.destination);
    const offersByType = this.#offers.find((it) => it.type === this.#point.type).offers;
    const pointOffers = offersByType.filter((it) => this.#point.offers.includes(it.id));
    const prevPointComponent = this.#pointComponent;
    const prevPointFormComponent = this.#pointFormComponent;

    this.#pointComponent = new PointView({
      destination,
      offers: pointOffers,
      point: this.#point,
      onRollupClick: this.#handleRollupClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#pointFormComponent = new PointFormView({
      destinations: this.#destinations,
      offersList: offersByType,
      point: this.#point,
      onFormSubmit: this.#handleFormSubmit,
      onFormRollupClick: this.#handleFormRollupClick
    });

    if (prevPointComponent === null || prevPointFormComponent === null) {
      render(this.#pointComponent, this.#pointsContainer);
      return;
    }

    if (this.#pointsContainer.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointsContainer.contains(prevPointFormComponent.element)) {
      replace(this.#pointFormComponent, prevPointFormComponent);
    }

    remove(prevPointComponent);
    remove(prevPointFormComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointFormComponent);
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

  #handleFavoriteClick = () => {
    this.#handleDataUpdate({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #handleRollupClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataUpdate(point);
    this.#replaceFormToPoint();
  };

  #handleFormRollupClick = () => {
    this.#replaceFormToPoint();
  };
}
