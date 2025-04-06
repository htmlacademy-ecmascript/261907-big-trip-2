import {Filters, UpdateType} from '../const.js';
import {remove, render, replace} from '../framework/render.js';
import {filter} from '../utils/filter.js';
import FiltersView from '../view/filters-view.js';

export default class FiltersPresenter {
  #filtersModel = null;
  #pointsModel = null;
  #filtersContainer = null;
  #filtersComponent = null;

  constructor({filtersModel, pointsModel, filtersContainer}) {
    this.#filtersModel = filtersModel;
    this.#pointsModel = pointsModel;
    this.#filtersContainer = filtersContainer;

    this.#filtersModel.addObserver(this.#handleModelEvent);
    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const points = this.#pointsModel.points;

    return Object.values(Filters).map((type) => ({
      type,
      enabled: Boolean(filter[type](points).length)
    }));
  }

  init() {
    const filters = this.filters;
    const prevFiltersComponent = this.#filtersComponent;

    this.#filtersComponent = new FiltersView({
      filters,
      currentFilterType: this.#filtersModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange
    });

    if (prevFiltersComponent === null) {
      render(this.#filtersComponent, this.#filtersContainer);

      return;
    }

    replace(this.#filtersComponent, prevFiltersComponent);
    remove(prevFiltersComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filtersModel.filter === filterType) {
      return;
    }

    this.#filtersModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
