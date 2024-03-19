'use strict';

/**
 * filtering projects
 * when I click a category,
 *  1. emphasize category color selected
 *  2. show only projects related that category
 *    (3.transition: appear from bottom)
 *
 *
 */

// const CATEGORY_LIST = ['all', 'frontend', 'backend', 'mobile'];
const CLASS_CATEGORY_SELECTED = 'category--selected';
const CLASS_PROJECT_OFF = 'project--off';
const categories = document.querySelector('.categories');
const projects = document.querySelector('.projects');
let previousSelected = document.querySelector('[data-category="all"]');

categories.addEventListener('click', (e) => {
  const selectedCategory = e.target?.dataset?.category ?? 'all';
  if (selectedCategory) {
    const currentSelected = document.querySelector(
      `[data-category="${selectedCategory}"]`
    );
    previousSelected?.classList.remove(CLASS_CATEGORY_SELECTED);
    currentSelected?.classList.add(CLASS_CATEGORY_SELECTED);
    previousSelected = currentSelected;
  }

  for (let i = 0; i < projects.children.length; i++) {
    projects.children[i].classList.remove(CLASS_PROJECT_OFF);
  }

  if (selectedCategory === 'all') {
    return;
  }

  for (let i = 0; i < projects.children.length; i++) {
    const childrenCategory = projects.children[i]?.dataset?.category;
    if (childrenCategory !== selectedCategory) {
      projects.children[i].classList.add(CLASS_PROJECT_OFF);
    }
  }
});
