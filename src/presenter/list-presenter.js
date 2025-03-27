import {RenderPosition, render} from '../render.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripHeaderView from '../view/trip-header-view.js';
import SortView from '../view/sort-view.js';
import EventFormView from '../view/event-form.js';
import EventView from '../view/event-view.js';

export default class ListPresenter {
  eventsList = new TripEventsListView();

  constructor({header, main, pointsModel}) {
    this.header = header;
    this.main = main;
    this.pointsModel = pointsModel;
  }

  init() {
    this.listPoints = [...this.pointsModel.getPoints()];
    render(new TripHeaderView(), this.header, RenderPosition.AFTERBEGIN);
    render(new SortView(), this.main);
    render(this.eventsList, this.main);

    const pointForForm = this.listPoints[0];

    render(new EventFormView({
      destinations: [...this.pointsModel.getDestinations()],
      offersList: [...this.pointsModel.getOffersByType(pointForForm.type)],
      point: pointForForm
    }), this.eventsList.getElement());

    for (let i = 1; i < this.listPoints.length; i++) {
      const point = this.listPoints[i];

      render(new EventView({
        destination: this.pointsModel.getDestinationById(point.id),
        offers: this.pointsModel.getAndFilterOffers(point.type, point.offers),
        point
      }), this.eventsList.getElement());
    }
  }
}
