var navToggle = document.querySelector('.main-nav__toggle');
var navMain = document.querySelector('.main-nav');
var header = document.querySelector('.page-header');
var modalSuccess = document.getElementById('modal-success');
var modalFailure = document.getElementById('modal-failure');
var modalButtonSuccess = document.getElementById('modal-button-success');
var modalButtonFailure = document.getElementById('modal-button-failure');
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

if (modalSuccess) {
  modalButtonSuccess.addEventListener('click', function (evt) {
    modalSuccess.classList.remove('modal--active');
  });
};

if (modalFailure) {
  modalButtonFailure.addEventListener('click', function (evt) {
    modalFailure.classList.remove('modal--active');
  });
};

if (formReview) {
  formReview.addEventListener('submit', function (evt) {
    if (!formNameFirst.value || !formNameSecond.value || !formTel.value || !formEmail.value) {
      evt.preventDefault();
      modalFailure.classList.add('modal--active');
    } else {
      evt.preventDefault();
      modalSuccess.classList.add('modal--active');
    };
  });
};
