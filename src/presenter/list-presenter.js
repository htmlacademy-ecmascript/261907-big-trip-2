import {RenderPosition, render} from '../render.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripHeaderView from '../view/trip-header-view.js';
import SortView from '../view/sort-view.js';
import NewEventFormView from '../view/new-event-form.js';
import EventView from '../view/event-view.js';

export default class ListPresenter {
  eventsList = new TripEventsListView();

  constructor({header, main}) {
    this.header = header;
    this.main = main;
  }

  init() {
    render(new TripHeaderView, this.header, RenderPosition.AFTERBEGIN);
    render(new SortView, this.main);
    render(this.eventsList, this.main);
    render(new NewEventFormView, this.eventsList.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView, this.eventsList.getElement());
    }
  }
}
