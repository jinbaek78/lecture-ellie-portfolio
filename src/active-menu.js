const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonial',
  '#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

const options = {
  root: null,
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;

    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;

    const navIndex = selectLastOne
      ? sectionIds.length - 1
      : findFirstIntersecting(visibleSections);

    selectNaeItem(navIndex);

    function findFirstIntersecting(intersections) {
      const index = intersections.indexOf(true);
      return index >= 0 ? index : 0;
    }

    function selectNaeItem(index) {
      const navItem = navItems[index];
      activeNavItem.classList.remove('active');
      activeNavItem = navItem;
      activeNavItem.classList.add('active');
    }
  });
}
