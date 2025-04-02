import {render} from './framework/render.js';
import {generateFilters} from './mock/filter.js';
import PointsModel from './model/points-model.js';
import ListPresenter from './presenter/list-presenter.js';
import FiltersView from './view/filters-view.js';
import NewPointButtonView from './view/new-point-button-view.js';


const tripHeaderElement = document.querySelector('.trip-main');
const filtersElement = tripHeaderElement.querySelector('.trip-controls__filters');
const tripPointsElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();

const listPresenter = new ListPresenter({
  header: tripHeaderElement,
  main: tripPointsElement,
  pointsModel
});

const filters = generateFilters(pointsModel.points);

render(new FiltersView({filters}), filtersElement);
render(new NewPointButtonView(), tripHeaderElement);
listPresenter.init();
