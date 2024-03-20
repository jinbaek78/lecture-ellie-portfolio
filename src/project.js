'use strict';

// handling logic related to this project filtering

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }

  // re-set active menu
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  event.target.classList.add('category--selected');

  // project filtering
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
  projectsContainer.classList.add('anim-out');
});
