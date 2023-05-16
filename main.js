const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const cartAside = document.querySelector('.shopping-cart-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
  cartAside.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  // const isCartAside = !cartAside.classList.contains('inactive');
  // if (isCartAside) {
  //   cartAside.classList.add('inactive')
  // }
  // mobileMenu.classList.toggle('inactive')
  cartAside.classList.add('inactive');
  desktopMenu.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
}

function toggleCartAside() {
  // const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  // if (isMobileMenuOpen) {
  //   mobileMenu.classList.add('inactive')
  // }
  // cartAside.classList.toggle('inactive')
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive')
  cartAside.classList.toggle('inactive')
}