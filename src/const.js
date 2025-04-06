const Filters = {
  EVERYTHING: 'EVERYTHING',
  FUTURE: 'FUTURE',
  PRESENT: 'PRESENT',
  PAST: 'PAST'
};

const SortType = {
  DAY: 'DAY',
  TIME: 'TIME',
  PRICE: 'PRICE'
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MEDIUM: 'MEDIUM',
  MAJOR: 'MAJOR'
};

const UserAction = {
  ADD_POINT: 'ADD_POINT',
  UPDATE_POINT: 'UPDATE_POINT',
  DELETE_POINT: 'DELETE_POINT'
};

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export {
  Filters,
  SortType,
  UpdateType,
  UserAction,
  TYPES
};
