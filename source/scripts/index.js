const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('header__nav--closed');
  navMain.classList.toggle('header__nav--opened');
});

const promoSlider = new Swiper('.promo__slider', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.slider__pagination',
    clickable: true,
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet--active',
  },

  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});

var map = L.map('map').setView([59.968142, 30.316425], 17);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var mapPin = L.icon({
  iconUrl: '../images/map-pin.svg',

  iconSize:     [38, 50],
  iconAnchor:   [-75, 75],
  popupAnchor:  [-3, -76]
});

L.marker([59.968142, 30.316425], {icon: mapPin}).addTo(map);
