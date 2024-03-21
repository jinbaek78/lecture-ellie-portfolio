// #1. activate the menu belongs to that section when scrolling
// using observer API
//  1. detect current section when scrolling
window.addEventListener(
  'load',
  (event) => {
    createObserver(handleIntersect);
  },
  false
);

function handleIntersect(entries) {
  if (entries[0].isIntersecting) {
    const id = entries[0].target.id;
    const active = document.querySelector('.header__menu__item.active');
    const menu = document.querySelector(`[data-item="${id}"]`);
    active.classList.remove('active');
    menu.classList.add('active');
  }
}

function createObserver(callback) {
  const sectionIds = [
    'home',
    'about',
    'skills',
    'work',
    'testimonial',
    'contact',
  ];

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };
  const observer = new IntersectionObserver(callback, options);

  sectionIds.forEach((id) => {
    observer.observe(document.querySelector(`#${id}`));
  });
}
