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
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  if (window.scrollY >= homeHeight / 2) {
    arrow.classList.add('arrow-up--show');
  } else {
    arrow.classList.remove('arrow-up--show');
  }
});
