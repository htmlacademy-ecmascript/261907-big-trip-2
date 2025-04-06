import AbstractView from '../framework/view/abstract-view';

const createFilterTemplate = ({type, enabled}, currentFilterType) => `<div class="trip-filters__filter">
  <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${type === currentFilterType ? 'checked' : ''}${!enabled ? ' disabled' : ''}>
  <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
</div>`;

const createFiltersTemplate = (filters, currentFilterType) => `
  <form class="trip-filters" action="#" method="get">
    ${filters.map((filter) => createFilterTemplate(filter, currentFilterType)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;

export default class FiltersView extends AbstractView {
  #filters = null;
  #currentFilterType = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilterType = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilterType);
  }

  #filterTypeChangeHandler = (evt) => {
    if (!evt.target.classList.contains('trip-filters__filter-input')) {
      return;
    }

    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
