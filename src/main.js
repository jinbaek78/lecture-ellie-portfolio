/**
 * 0. make header bg transparent
 * 1. header height:
 * 2. add scroll event: change the color to primary when the height of current scroll is higher than header's
 */
const HEADER_TRANSPARENT = 'header--transparnt';
const header = document.querySelector('.header');
const heightOfHeader = header.getBoundingClientRect().height;
header.classList.add(HEADER_TRANSPARENT);

window.addEventListener('scroll', function () {
  const scrollY = document.documentElement.scrollTop;
  if (scrollY >= heightOfHeader) {
    header.classList.remove(HEADER_TRANSPARENT);
  } else if (scrollY < heightOfHeader) {
    header.classList.add(HEADER_TRANSPARENT);
  }
});
