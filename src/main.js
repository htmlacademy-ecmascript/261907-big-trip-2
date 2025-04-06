import {render} from './framework/render.js';
import FiltersModel from './model/filters-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import FiltersPresenter from './presenter/filters-presenter.js';
import ListPresenter from './presenter/list-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';

const tripHeaderElement = document.querySelector('.trip-main');
const filtersElement = tripHeaderElement.querySelector('.trip-controls__filters');
const tripPointsElement = document.querySelector('.trip-events');
const filtersModel = new FiltersModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const pointsModel = new PointsModel();

const filtersPresenter = new FiltersPresenter({
  filtersModel,
  pointsModel,
  filtersContainer: filtersElement
});

const listPresenter = new ListPresenter({
  header: tripHeaderElement,
  main: tripPointsElement,
  filtersModel,
  destinationsModel,
  offersModel,
  pointsModel,
  onNewPointDestroy: handleNewPointFormClose
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  listPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(newPointButtonComponent, tripHeaderElement);
listPresenter.init();
filtersPresenter.init();
