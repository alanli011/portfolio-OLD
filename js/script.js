/*
* Open the drawer when the menu ison is clicked.
*/
var nav_toggle = document.querySelector('#nav_toggle');
var main = document.querySelector('main');
var navbar = document.querySelector('.navbar-nav');

nav_toggle.addEventListener('click', function(e) {
  navbar.classList.toggle('open');
  e.stopPropagation();
});

main.addEventListener('click', function() {
  navbar.classList.remove('open');
});