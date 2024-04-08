window.onscroll = function () {
  navOnScroll();
};
const scrollDownLink = document.querySelector('.scroll-down');
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.nav li');

function navOnScroll() {
  if (isScrollingToSection) return; // Skip the logic if scrolling to a section

  // Sticky Nabvar Logic
  let navOffset;
  if (window.innerWidth <= 1100) {
    // Define the Intersection Observer
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          !entry.isIntersecting
            ? // When the scroll-down link is out of view, add the sticky class
              navbar.classList.add('sticky')
            : // When the scroll-down link is in view, remove the sticky class
              navbar.classList.remove('sticky');
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.01,
      }
    );

    // Observe the scroll-down link
    if (scrollDownLink) observer.observe(scrollDownLink);
  } else {
    navOffset = window.innerHeight - window.innerHeight * 0.2;
    const stickyClass = window.scrollY >= navOffset ? 'sticky' : '';
    navbar.className = `navbar ${stickyClass}`;
  }

  // Active Section Detection
  let navbarHeight = navbar.offsetHeight;
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - navbarHeight)
      currentSection = section.getAttribute('id');
  });

  // Update Active Navigation Tab
  navItems.forEach((li) => {
    li.classList.remove('active');
    const refSection = li
      .querySelector('a')
      .getAttribute('href')
      .replace('#', '');

    if (refSection === currentSection) {
      li.classList.add('active');
    }
  });
}

// Activation on Click
let isScrollingToSection = false; // Flag to indicate when scrolling to a section
document.querySelectorAll('.nav > li').forEach((li, index) => {
  li.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor link behavior
    isScrollingToSection = true; // Set flag to true
    const sectionId = li.querySelector('a').getAttribute('href');
    const section = document.querySelector(sectionId);

    // Smooth scroll to the section
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });

    // Wait for the scroll to finish before re-enabling the scroll event logic
    setTimeout(() => {
      isScrollingToSection = false;
    }, 5000);

    document.querySelector('.nav > .active').classList.remove('active');
    li.classList.add('active');
  });
});
