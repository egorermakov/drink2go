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
