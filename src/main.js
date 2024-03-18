const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight + 10) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});
