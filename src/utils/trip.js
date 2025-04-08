import dayjs from 'dayjs';

const extractDestinationName = (destinations, id) => destinations.find((it) => it.id === id).name;

const extractRoute = (destinations, points) => {
  const pointsWithTransfer = points
    .map((point) => point.destination)
    .filter((destination, i, pointDestinations) => i === 0 || destination !== pointDestinations[i - 1]);

  const route = pointsWithTransfer.length > 3
    ? `${extractDestinationName(destinations, pointsWithTransfer[0])} — ... — ${extractDestinationName(destinations, pointsWithTransfer[pointsWithTransfer.length - 1])}`
    : pointsWithTransfer.map((id) => extractDestinationName(destinations, id)).join(' — ');

  return route;
};

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
