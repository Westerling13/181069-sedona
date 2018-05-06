var navToggle = document.querySelector('.main-nav__toggle');
var navMain = document.querySelector('.main-nav');
var header = document.querySelector('.page-header');
var modalPositive = document.getElementById('modal-positive');
var modalNegative = document.getElementById('modal-negative');
var modalButtonPositive = document.getElementById('modal-button-positive');
var modalButtonNegative = document.getElementById('modal-button-negative');
var formReview = document.querySelector('.review__form');
var formButton = document.querySelector('.review__button');
var formNameFirst = document.querySelector('[name=first-name]');
var formNameSecond = document.querySelector('[name=second-name]');
var formTel = document.querySelector('[name=tel]');
var formEmail = document.querySelector('[name=email]');


navMain.classList.remove('main-nav--no-js');


navToggle.addEventListener('click', function (evt) {
  navMain.classList.toggle('main-nav--opened');
});

if (modalPositive) {
  modalButtonPositive.addEventListener('click', function (evt) {
    modalPositive.classList.remove('modal--active');
  });
};

if (modalNegative) {
  modalButtonNegative.addEventListener('click', function (evt) {
    modalNegative.classList.remove('modal--active');
  });
};

if (formReview) {
  formReview.addEventListener('submit', function (evt) {
    if (!formNameFirst.value || !formNameSecond.value || !formTel.value || !formEmail.value) {
      evt.preventDefault();
      modalNegative.classList.add('modal--active');
    } else {
      modalPositive.classList.add('modal--active');
    };
  });
};
