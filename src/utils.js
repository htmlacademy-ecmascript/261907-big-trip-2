const getDefaultDate = () => (new Date()).toISOString();

const getRandomIntegerInPositiveRange = (x, y) => {
  const min = Math.ceil(Math.min(Math.abs(x), Math.abs(y)));
  const max = Math.floor(Math.max(Math.abs(x), Math.abs(y)));

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createDateGenerator = () => {
  let timestamp = Number(`17${getRandomIntegerInPositiveRange(10000000000, 99999999999)}`);

  return () => {
    timestamp += getRandomIntegerInPositiveRange(10000, 100000000);

    const date = new Date(timestamp);

    return date.toISOString();
  };
};

const createIdGenerator = () => {
  let id = 0;

  return () => {
    id++;

    return id;
  };
};

const getRandomArrayElement = (array) => array[getRandomIntegerInPositiveRange(0, array.length - 1)];

export {getDefaultDate, getRandomIntegerInPositiveRange, createIdGenerator, createDateGenerator, getRandomArrayElement};
