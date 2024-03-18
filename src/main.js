const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight + 10) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

const home = document.querySelector('#home');
const homeContainer = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
const criterionValue = Math.ceil(homeHeight * 0.1);
document.addEventListener('scroll', () => {
  const CORRECTED_VALUE = 0.2;
  const scrollY = Math.ceil(window.scrollY / criterionValue);
  const opacity = Number((1 - scrollY * 0.1 - CORRECTED_VALUE).toFixed(1));
  homeContainer.style.opacity = `${opacity}`;
});
