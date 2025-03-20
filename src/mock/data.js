import {TYPES} from '../const.js';
import {createDateGenerator, createIdGenerator, getRandomIntegerInPositiveRange, getRandomArrayElement} from '../utils.js';

const OFFERS_MAX_COUNT = 8;

const DESTINATIONS = [
  {
    id: '1',
    description: 'Yokohama is Japan’s second largest city with a population of over three million.',
    name: 'Yokohama',
    pictures: [
      {
        src: 'https://www.japan-guide.com/g20/740/3209_01.jpg',
        description: 'Zoorasia is one of Japan’s newest, largest and best kept zoos.'
      }
    ]
  },
  {
    id: '2',
    description: 'Osaka is Japan’s second largest metropolitan area after Tokyo.',
    name: 'Osaka',
    pictures: [
      {
        src: 'https://www.japan-guide.com/g18/740/4021_top.jpg',
        description: 'Universal Studios Japan (USJ) was the first theme park under the Universal Studios brand to be built in Asia.'
      }
    ]
  },
  {
    id: '3',
    description: 'With over two million inhabitants, Nagoya is Japan’s fourth most populated city after Tokyo, Yokohama and Osaka.',
    name: 'Nagoya',
    pictures: [
      {
        src: 'https://www.japan-guide.com/g21/740/3314_01.jpg',
        description: 'The SCMAGLEV and Railway Park is the railway museum of Central Japan Railways (JR Central).'
      }
    ]
  },
  {
    id: '4',
    description: 'Sapporo is the capital of Hokkaido and Japan’s fifth largest city.',
    name: 'Sapporo',
    pictures: []
  },
  {
    id: '5',
    description: 'Fukuoka is Kyushu’s largest and one of Japan’s ten most populated cities. Because of its closeness to the Asian mainland (closer to Seoul than to Tokyo), Fukuoka has been an important harbor city for many centuries and was chosen by the Mongol invasion forces as their landing point in the 13th century.',
    name: 'Fukuoka',
    pictures: [
      {
        src: 'https://www.japan-guide.com/g21/740/4808_01b.jpg',
        description: 'he Hakata Gion Yamakasa is one of the most interesting festivals in Japan.'
      },
      {
        src: 'https://www.japan-guide.com/g21/740/4803_01.jpg',
        description: 'Fukuoka’s open air food stands are possibly the city’s best known symbol.'
      },
      {
        src: 'https://www.japan-guide.com/g21/740/4810_01b.jpg',
        description: 'Uminonakamichi Seaside Park, is a sprawling, family-oriented park located on a narrow peninsula across the bay from central Fukuoka.'
      }
    ]
  },
  {
    id: '6',
    description: 'Sandwiched between Tokyo and Yokohama, Kawasaki is a large coastal city in Kanagawa Prefecture that stretches along the Tamagawa River.',
    name: 'Kawasaki',
    pictures: [
      {
        src: 'https://www.japan-guide.com/g20/740/3252_11.jpg',
        description: 'The Fujiko F. Fujio Museum, also informally known as the Doraemon Museum, is a fanciful art museum found in the suburbs of Kawasaki.'
      }
    ]
  },
  {
    id: '7',
    description: 'Tokyo is Japan’s capital and the world’s most populous metropolis.',
    name: 'Tokyo',
    pictures: [
      {
        src: 'https://www.japan-guide.com/g18/740/3017_01.jpg',
        description: 'The current Imperial Palace is located on the former site of Edo Castle, a large park area surrounded by moats and massive stone walls in the center of Tokyo, a short walk from Tokyo Station. It is the residence of Japan’s Imperial Family.'
      }
    ]
  },
  {
    id: '8',
    description: 'Kyoto served as Japan’s capital and the emperor’s residence from 794 until 1868. It is one of the country’s ten largest cities with 1.5 million inhabitants and a modern face.',
    name: 'Kyoto',
    pictures: []
  }
];

const SERVICES = ['Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train', 'With pets', 'With children', 'For newlyweds'];

const generateOfferId = createIdGenerator();
const generatePointId = createIdGenerator();
const generatePointDate = createDateGenerator();

const createOffer = () => ({
  id: String(generateOfferId()),
  title: getRandomArrayElement(SERVICES),
  price: getRandomIntegerInPositiveRange(5, 5000)
});

const createOffers = () => {
  const typeOffers = [];

  TYPES.forEach((it) => {
    typeOffers.push({
      type: it,
      offers: Array.from({length: getRandomIntegerInPositiveRange(0, OFFERS_MAX_COUNT)}, createOffer),
    });
  });

  return typeOffers;
};

const offers = createOffers();

const createPoint = () => {
  const type = getRandomArrayElement(TYPES);
  const offersForType = offers.find((it) => it.type === type).offers;
  const offersCount = getRandomIntegerInPositiveRange(0, offersForType.length);
  const offersForPoint = [];

  for (let i = 0; i < offersCount; i++) {
    offersForPoint.push(offersForType[i].id);
  }

  return {
    id: String(generatePointId()),
    basePrice: getRandomIntegerInPositiveRange(10, 1700),
    dateFrom: generatePointDate(),
    dateTo: generatePointDate(),
    destination: getRandomArrayElement(DESTINATIONS).id,
    isFavorite: Boolean(getRandomIntegerInPositiveRange(0, 1)),
    offers: offersForPoint,
    type
  };
};

export {DESTINATIONS, createPoint, offers};
