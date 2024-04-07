window.onscroll = function () {
  navOnScroll();
};
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.nav li');

function navOnScroll() {
  // Sticky Nabvar Logic
  let offset =
    window.innerWidth <= 1100
      ? window.innerHeight
      : window.innerHeight - window.innerHeight * 0.2; // Adding 20vh (the top position of the sticky navbar)

  const stickyClass = window.scrollY >= offset ? 'sticky' : '';
  navbar.className = `navbar ${stickyClass}`;

  // Active Section Detection
  let navbarHeight = navbar.offsetHeight;
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - navbarHeight) {
      // currentSection = section.getAttribute('id');
      currentSection = section.getAttribute('class');
      console.log(
        window.scrollY,
        ' is >= ',
        sectionTop - navbarHeight,
        ' ? ',
        'currentSection',
        currentSection
      );
    }
  });

  //   console.log('1. sectionTop: ', sectionTop);
  // //   console.log('2. sectionHeight: ', sectionHeight);
  //   console.log('2. navbarHeight: ', navbarHeight);
  //   console.log('3. window.scrollY: ', window.scrollY);
  //   console.log('4. sectionTop - navbarHeight: ', sectionTop - navbarHeight);
  //   console.log('5. curent section: ', currentSection);

  // Update Active Navigation Tab

  //   navItems.forEach((li) => {
  //     li.classList.remove('active');
  //     const refSection = li
  //       .querySelector('a')
  //       .getAttribute('href')
  //       .replace('#', '');
  //     if (refSection === currentSection) {
  //       li.classList.add('active');
  //     }
  //   });

  navItems.forEach((li) => {
    li.classList.remove('active');
    const refSection =
      li.querySelector('a').getAttribute('href').replace('#', '') + ' section';
    console.log('refSection: ', refSection);
    console.log('currentSection: ', currentSection);

    if (refSection === currentSection) {
      li.classList.add('active');
    }
  });
}
// Activation on Click (keeping your existing logic)
document.querySelectorAll('.nav > li').forEach((li, index) => {
  li.addEventListener('click', function () {
    console.log('li: ', li.id);
    document.querySelector('.nav > .active').classList.remove('active');
    li.classList.add('active');
  });
});

// window.onscroll = function() {navOnScroll();};
// const navbar = document.getElementById("navbar");
// const userAgent = navigator.userAgent;

// let highlightSections = true;
// let scrollTimer = -1;

// function scrollFinished() {
//     highlightSections = true;
//     console.log("finished");
// }

// function navOnScroll() {
//     let innerH = window.innerHeight;
//     let innerW = window.innerWidth;
//     const navbarOffsetPixel = (20 * innerH) / 100;
//     const MOBILE_OFFSET = window.scrollY;
//     const WINDOWS_OFFSET = window.scrollY + navbarOffsetPixel;

//     let offset = innerW <= 1100 ? MOBILE_OFFSET : WINDOWS_OFFSET;

//     offset >= innerH ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

//     if (navbar.classList.contains("sticky")) {
//         navbar.style.right = userAgent.includes('Chrome') ? "2.2vw" : "2.5vw";
//     } else {
//         navbar.style.right = "2.5vw";
//     }

//     // updating the nav activation on scroll
//     const SECTION_COUNT = document.querySelectorAll("section");

//     // let nav=[];
//     // for(let i=1; i<=4; i++) { nav[i] = document.getElementById("nav-item-"+i); }

//     // if(highlightSections) {
//     //     sec = [];
//     //     SECTION_LENGTHS = [ null, 200, 200, 450 ];

//     //     for(var i = 2; i <= SECTION_COUNT.length; i++) {
//     //         sec[i] = document.getElementById("sec" + i).offsetTop - SECTION_LENGTHS[i-1];
//     //     }

//     //     if (offset <= sec[2]) { activate(1); }
//     //     else if (offset <= sec[3]) { activate(2); }
//     //     else if (offset <= sec[4]) { activate(3); }
//     //     else { activate(4); }
//     // }

//     // function activate(navItem) {
//     //     for(i = 1; i <= 4; i++) {
//     //         if(i == navItem) {
//     //             nav[i].classList.add("active");
//     //         } else {
//     //             nav[i].classList.remove("active");
//     //         }
//     //     }
//     // }

//     if(scrollTimer !== -1) {clearTimeout(scrollTimer);}
//     scrollTimer = window.setTimeout('scrollFinished()', 300);
// }

// // updating the nav activation on click
// let myNav  = document.querySelectorAll(".nav > li");

// for(let i=0; i<myNav.length; i++) {
//     myNav[i].addEventListener("click", function() {
//         document.querySelector(".nav > .active").classList.remove("active");
//         myNav[i].classList.add("active");
//         highlightSections = false;
//     })
// }

// /*  End  */
