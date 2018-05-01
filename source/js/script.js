var navToggle = document.querySelector(".main-nav__toggle");
var navMain = document.querySelector(".main-nav");
var header = document.querySelector(".page-header");
var modal = document.querySelector(".modal");
var modalBtn = document.querySelector(".modal__button");

navMain.classList.remove('main-nav--no-js');


navToggle.addEventListener('click', function (evt) {
  navMain.classList.toggle('main-nav--opened');
});

// if (modal) {
//   modalBtn.addEventListener('click', function (evt) {
//     modal.classList.remove('modal--active');
//   });
// };
