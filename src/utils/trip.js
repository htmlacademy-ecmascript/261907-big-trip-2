import dayjs from 'dayjs';

const isFuturePoint = (dateFrom) => dayjs().isBefore(dayjs(dateFrom));

const isPresentPoint = (dateFrom, dateTo) => dayjs().isAfter(dayjs(dateFrom)) && dayjs().isBefore(dayjs(dateTo));

const isPastPoint = (dateTo) => dayjs().isAfter(dayjs(dateTo));

export {isFuturePoint, isPresentPoint, isPastPoint};
