// #2. scrolls softly when a menu or arrow icon is clicked
const details = navigator.userAgent;
const regexp = /android|iphone|kindle|ipad/i;
const isMobileDevice = regexp.test(navigator.userAgent);

const menu = document.querySelector('.header__menu');
menu.addEventListener('click', (event) => {
  const id = event.target.dataset?.item;
  if (id === undefined) {
    return;
  }

  const selectedSection = document.querySelector(`#${id}`);

  selectedSection.scrollIntoView({
    behavior: 'smooth',
    block: id === 'testimonial' && !isMobileDevice ? 'center' : 'start',
    inline: 'nearest',
  });
});
