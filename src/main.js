import {render} from './framework/render.js';
import FiltersModel from './model/filters-model.js';
import DestinationsModel from './model/destinations-model.js';
import DestinationsApiService from './api-service/destinations-api-service.js';
import OffersModel from './model/offers-model.js';
import OffersApiService from './api-service/offers-api-service.js';
import PointsModel from './model/points-model.js';
import PointsApiService from './api-service/points-api-service.js';
import FiltersPresenter from './presenter/filters-presenter.js';
import ListPresenter from './presenter/list-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';

const AUTHORIZATION = 'Basic RHluYW1pZ2h0';
const END_POINT = 'https://23.objects.htmlacademy.pro/big-trip';

const DataType = {
  DESTINATIONS: 'DESTINATIONS',
  OFFERS: 'OFFERS',
  POINTS: 'POINTS'
};

const tripHeaderElement = document.querySelector('.trip-main');
const filtersElement = tripHeaderElement.querySelector('.trip-controls__filters');
const tripPointsElement = document.querySelector('.trip-events');
const filtersModel = new FiltersModel();

const destinationsModel = new DestinationsModel({
  apiService: new DestinationsApiService(END_POINT, AUTHORIZATION),
  type: DataType.DESTINATIONS
});

const offersModel = new OffersModel({
  apiService: new OffersApiService(END_POINT, AUTHORIZATION),
  type: DataType.OFFERS
});

const pointsModel = new PointsModel({
  apiService: new PointsApiService(END_POINT, AUTHORIZATION),
  type: DataType.POINTS
});

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

listPresenter.init();
filtersPresenter.init();

destinationsModel.init()
  .then(() => {
    offersModel.init()
      .then(() => {
        pointsModel.init()
          .finally(() => {
            render(newPointButtonComponent, tripHeaderElement);
          });
      });
  });
