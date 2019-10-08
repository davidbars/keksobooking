'use strict';

var mapNode = document.querySelector('.map');
mapNode.classList.remove('map--faded');

var OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalo',
];
var OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
var OFFER_BRANDS = [
  'Royal Park Hotel',
  'Kalev',
  'Maxima',
  'Farmi',
  'Neste',
  'Selver',
  'Kantar Emor',
  'Cian',
  'Arsenal-holding',
  'NDV Desig'
];
var MapRect = {
  LEFT: 100,
  TOP: 130,
  RIGHT: 1200,
  BOTTOM: 630,
};
var PinSize = {
  WIDTH: 70,
  HEIGHT: 50,
  RADIUS: 25,
};

//  достаем рандомное число в рамках аргументов
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

//  достаем рандомный элемент из массива
var getRandomArrElement = function (arr) {
  return arr[getRandomInt(0, arr.length - 1)];
};

//  достаем рандомное число элементов из массива
var getRandomArr = function (arr) {
  var randomIndex = getRandomInt(0, arr.length - 1);
  var myArr = [];
  for (var j = 1; j < randomIndex; j++) {
    myArr.push(arr[j]);
  }
  return myArr;
};

var makeOffer = function (id) {
  var rooms = getRandomInt(1, 5);
  var guests = rooms * getRandomInt(1, 3);
  var fullTitle = getRandomArrElement(OFFER_TYPES) + ' "' + getRandomArrElement(OFFER_BRANDS) + '"';
  var location = {
    x: getRandomInt(MapRect.LEFT, MapRect.RIGHT),
    y: getRandomInt(MapRect.TOP, MapRect.BOTTOM),
  };

  return {
    avatar: 'img/avatars/user0' + id + '.png',
    offer: {
      title: fullTitle,
      address: location.x + ', ' + location.y,
      type: getRandomArrElement(OFFER_TYPES),
      price: getRandomInt(3500, 80) * 100,
      rooms: rooms,
      guests: guests,
      features: getRandomArr(OFFER_FEATURES),
      description: 'Our ' + fullTitle + ' Conveniently located within a ' + getRandomInt(5, 25) + '-minute walk from Shinbashi and center. The ' + fullTitle + ' is modern and stylish accommodations.'
    },
    location: location,
  };
};

var getOffers = function (count) {
  var offers = [];

  for (var i = 1; i < count; i++) {
    offers.push(makeOffer(i));
  }

  return offers;
};

var map = document.querySelector('.map');
var mapPins = map.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var renderPin = function (offer) {
  var pin = pinTemplate.cloneNode(true);
  var pinImg = pin.querySelector('img');

  pinImg.src = offer.avatar;
  pin.style.left = (offer.location.x - PinSize.RADIUS) + 'px';
  pin.style.top = (offer.location.y - PinSize.HEIGHT) + 'px';

  return pin;
};

var renderPins = function (offers) {
  var fragment = document.createDocumentFragment();
  offers.forEach(function (offer) {
    fragment.appendChild(renderPin(offer));
  });

  mapPins.appendChild(fragment);
};

var offers = getOffers(8);

renderPins(offers);

