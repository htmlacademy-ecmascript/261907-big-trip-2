import {Filters} from '../const.js';
import {isFuturePoint, isPresentPoint, isPastPoint} from './trip.js';

const filter = {
  [Filters.EVERYTHING]: (points) => points,
  [Filters.FUTURE]: (points) => points.filter((point) => isFuturePoint(point.dateFrom)),
  [Filters.PRESENT]: (points) => points.filter((point) => isPresentPoint(point.dateFrom, point.dateTo)),
  [Filters.PAST]: (points) => points.filter((point) => isPastPoint(point.dateTo))
};

export {filter};
