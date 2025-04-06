import {UpdateType, UserAction} from '../const.js';
import {remove, render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  FORM: 'FORM'
};

export default class PointPresenter {
  #destinations = [];
  #offers = [];
  #point = null;
  #mode = Mode.DEFAULT;
  #pointComponent = null;
  #pointFormComponent = null;
  #pointsContainer = null;
  #handleDataUpdate = null;
  #handleModeChange = null;

  constructor({destinations, offers, pointsContainer, onDataUpdate, onModeChange}) {
    this.#destinations = destinations;
    this.#offers = offers;
    this.#pointsContainer = pointsContainer;
    this.#handleDataUpdate = onDataUpdate;
    this.#handleModeChange = onModeChange;
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
      offers: this.#offers,
      point: this.#point,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
      onFormRollupClick: this.#handleFormRollupClick
    });

    if (prevPointComponent === null || prevPointFormComponent === null) {
      render(this.#pointComponent, this.#pointsContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.FORM) {
      replace(this.#pointFormComponent, prevPointFormComponent);
    }

    remove(prevPointComponent);
    remove(prevPointFormComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#pointFormComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  }

  #replacePointToForm() {
    replace(this.#pointFormComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#ecsKeydownHandler);
    this.#handleModeChange();
    this.#mode = Mode.FORM;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointFormComponent);
    document.removeEventListener('keydown', this.#ecsKeydownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #ecsKeydownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#pointFormComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataUpdate(
      UserAction.UPDATE_POINT,
      UpdateType.PATCH,
      {...this.#point, isFavorite: !this.#point.isFavorite}
    );
  };

  #handleRollupClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = (point) => {
    const isMinorUpdate = this.#point.basePrice !== point.basePrice
      || this.#point.dateFrom !== point.dateFrom
      || this.#point.dateTo !== point.dateTo
      || this.#point.destination !== point.destination
      || JSON.stringify(this.#point.offers) !== JSON.stringify(point.offers);

    this.#handleDataUpdate(
      UserAction.UPDATE_POINT,
      isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
      point
    );

    this.#replaceFormToPoint();
  };

  #handleDeleteClick = (point) => {
    this.#handleDataUpdate(
      UserAction.DELETE_POINT,
      UpdateType.MEDIUM,
      point
    );
  };

  #handleFormRollupClick = () => {
    this.#pointFormComponent.reset(this.#point);
    this.#replaceFormToPoint();
  };
}
