import {filter} from '../utils/filter.js';

const generateFilters = (points) => Object.entries(filter).map(
  ([filterType, filterPoints]) => ({
    type: filterType,
    enabled: Boolean(filterPoints((points)).length)
  })
);

export {generateFilters};
