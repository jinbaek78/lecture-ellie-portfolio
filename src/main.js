const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight + 10) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// home
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow: make arrow button toggle
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

/**
 * ✅1. when the screen is less than 768px
 *  header menu bar off
 *  toggle bars icon on
 *
 * ✅2. when the toggle bars is clicked
 *  show menu bar
 *
 * ✅3. when the toggle bars is clicked again
 *  disappear menu bar
 *
 * ☑️4. when the click a menu on the menu bar
 *  move to the section clicked and
 *  disappear menu bar
 */

const toggleBar = document.querySelector('.header__bars');
const menuBar = document.querySelector('.header__menu');
toggleBar.addEventListener('click', () => {
  console.log('clicked');
  console.log(menuBar);
  menuBar.classList.toggle('header__menu--show');
});

menuBar.addEventListener('click', () => {
  console.log('clicked');
  console.log(menuBar);
  menuBar.classList.toggle('header__menu--show');
});
