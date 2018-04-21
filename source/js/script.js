var menuButton = document.querySelector(".main-nav__toggle");
var menuBlock = document.querySelector(".site-list");
var header = document.querySelector(".page-header");

menuButton.addEventListener('click', function (evt) {
  menuButton.classList.toggle('main-nav__toggle--active');
  menuBlock.classList.toggle('site-list--active');
  header.classList.toggle('page-header--active');
});
