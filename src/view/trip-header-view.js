import dayjs from 'dayjs';
import AbstractView from '../framework/view/abstract-view';

const getDates = ([dateFrom, dateTo]) => {
  const pointFrom = dayjs(dateFrom);
  const pointTo = dayjs(dateTo);

  return `${pointFrom.format('D')}${pointFrom.format('M') !== pointTo.format('M') ? ` ${pointFrom.format('MMM')}` : ''} — ${pointTo.format('D MMM')}`;
};

const createTripHeaderTemplate = (route, dates, sum) => `
  <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${route}</h1>
      <p class="trip-info__dates">${getDates(dates)}</p>
    </div>
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${sum}</span>
    </p>
  </section>
`;

export default class TripHeaderView extends AbstractView {
  #route = null;
  #dates = null;
  #sum = null;

  constructor({route, dates, sum}) {
    super();
    this.#route = route;
    this.#dates = dates;
    this.#sum = sum;
  }

  get template() {
    return createTripHeaderTemplate(this.#route, this.#dates, this.#sum);
  }
}
