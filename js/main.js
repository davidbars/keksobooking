
var offersArr = [];
var mapNode = document.querySelector('.map');
mapNode.classList.remove('map--faded');

for ( var i = 1; i < 9 ; i++ ) {

  var myObject = new Object()

  // достаем рандомное число в рамках аргументов
  var randomInt = function (min,max) {

    return Math.floor(Math.random() * (max - min) + min);
  };

  // достаем рандомный элемент из массива
  var randomArrElement = function (arr) {

    var randomIndex = randomInt(0,arr.length);
    return arr[randomIndex];
  };

  // достаем рандомное число элементов из массива
  var randomArr = function (arr) {

    var randomIndex = randomInt(0,arr.length);
    var myArr = [];
    for ( var j = 1; j < randomIndex ; j++ ) {
      myArr.push(arr[j]);
    }
    return myArr;
  };

  var randomIntLocationsY = randomInt(630,130);
  var randomIntLocationsX = randomInt(1200,130);
  var offerPrice = randomInt(150000,13000);
  var offerRooms = randomInt(1, 5);
  var offerGuests = offerRooms > 3 ? offerRooms * 2 : offerRooms + 1;
  var offerCheckinArr = ['12:00', '13:00', '14:00'];
  var offerImgAdress = 'img/avatars/user0' + i + '.png';
  var offerTypeArr = ['palace', 'flat', 'house', 'bungalo'];
  var offerFeaturesArr = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
  var offerbrandsArr = ["Royal Park Hotel","Kalev","Maxima","Farmi","Neste","Farmi","Selver","Kantar Emor","Cian","Arsenal-holding","NDV Design"];
  var offerPhotoGallery = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  var offerbrandName = randomArrElement(offerbrandsArr);


  myObject.author = new Object();
  myObject.author.avatar = offerImgAdress;

  myObject.offer = new Object();
  myObject.offer.title = randomArrElement(offerTypeArr) + ' "' + offerbrandName + '"';
  myObject.offer.address = "" + randomIntLocationsY + ", " + randomIntLocationsX;
  myObject.offer.price = offerPrice;
  myObject.offer.type = randomArrElement(offerTypeArr);
  myObject.offer.rooms = offerRooms;
  myObject.offer.guests = offerGuests;
  myObject.offer.checkin = randomArrElement(offerCheckinArr);
  myObject.offer.checkout = randomArrElement(offerCheckinArr);
  myObject.offer.features = randomArr(offerFeaturesArr);
  myObject.offer.description = "Our " + myObject.offer.title +" Conveniently located within a "+randomInt(5,25)+"-minute walk from Shinbashi and center, The  " + myObject.offer.title +" is modern and stylish accommodations.";
  myObject.offer.photos = randomArr(offerPhotoGallery);

  myObject.location =  {};
  myObject.location.x = randomIntLocationsX;
  myObject.location.y = randomIntLocationsY;

  offersArr.push(myObject);
}


var mapPins = document.querySelector('.map__pins');
var fragment = document.createDocumentFragment();

for ( var r = 0; r < offersArr.length ; r++ ) {

  var pinBtn = document.createElement("button");
  var pinBtnImg = document.createElement("img");

  pinBtn.setAttribute("type", "button");
  pinBtn.classList.add('map__pin');
  pinBtn.style.left = offersArr[r].location.x + 'px';
  pinBtn.style.top = offersArr[r].location.y + 'px';

  pinBtnImg.setAttribute("src", offersArr[r].author.avatar );
  pinBtnImg.setAttribute("draggable", false );
  pinBtnImg.setAttribute("alt", offersArr[r].offer.title );
  pinBtnImg.style.width = 40 + 'px';
  pinBtnImg.style.height = 40 + 'px';

  pinBtn.appendChild(pinBtnImg);
  fragment.appendChild(pinBtn);

}

mapPins.appendChild(fragment);


















