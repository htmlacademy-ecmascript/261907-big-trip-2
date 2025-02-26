import {render} from './render.js';
import FiltersView from './view/filters-view.js';
import NewEventButtonView from './view/new-event-button-view.js';
import ListPresenter from './presenter/list-presenter.js';

const tripHeaderElement = document.querySelector('.trip-main');
const filtersElement = tripHeaderElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const listPresenter = new ListPresenter({
  header: tripHeaderElement,
  main: tripEventsElement
});

render(new FiltersView(), filtersElement);
render(new NewEventButtonView(), tripHeaderElement);
listPresenter.init();
