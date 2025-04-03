import dayjs from 'dayjs';

const extractRoute = (destinations, points) => points
  .map((point) => point.destination)
  .filter((destination, i, pointDestinations) => i === 0 || destination !== pointDestinations[i - 1])
  .map((id) => destinations.find((it) => it.id === id).name)
  .join(' — ');

const getBasePrices = (points) => points.map((point) => point.basePrice);

const getOffersPrices = (offers, {type, offers: pointOffers}) => {
  const offersByType = offers.find((it) => it.type === type).offers;
  const offersPrices = pointOffers.map((id) => offersByType.find((it) => id === it.id).price);

  return offersPrices;
};

const findSum = (offers, points) => points
  .map((point) => getOffersPrices(offers, point))
  .flat()
  .concat(getBasePrices(points))
  .reduce((partialSum, it) => partialSum + Number(it), 0);

const isFuturePoint = (dateFrom) => dayjs().isBefore(dayjs(dateFrom));

const isPresentPoint = (dateFrom, dateTo) => dayjs().isAfter(dayjs(dateFrom)) && dayjs().isBefore(dayjs(dateTo));

const isPastPoint = (dateTo) => dayjs().isAfter(dayjs(dateTo));

const sortDay = (pointA, pointB) => dayjs(pointA.dateFrom) - dayjs(pointB.dateFrom);

const sortPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

const sortTime = (pointA, pointB) => (dayjs(pointB.dateTo) - dayjs(pointB.dateFrom)) - (dayjs(pointA.dateTo) - dayjs(pointA.dateFrom));

export {
  extractRoute,
  findSum,
  isFuturePoint,
  isPresentPoint,
  isPastPoint,
  sortDay,
  sortPrice,
  sortTime
};
