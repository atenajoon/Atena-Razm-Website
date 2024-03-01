//  tabs behaviour in Skills / section-2
// it's not being used since Oct 2023. The Experience one is being used for both of them
let skillsHeaders = document.querySelectorAll('.skills .tab-header > div');
let skillsContents = document.querySelectorAll('.skills .tab-content > div');

for (let i = 0; i < skillsHeaders.length; i++) {
  skillsHeaders[i].addEventListener('click', function () {
    document
      .querySelector('.skills .tab-header > .active')
      .classList.remove('active');
    skillsHeaders[i].classList.add('active');
    document
      .querySelector('.skills .tab-content > .active')
      .classList.remove('active');
    skillsContents[i].classList.add('active');
  });
}

//  tabs behaviour in Experience / section-3
let experienceHeaders = document.querySelectorAll(
  '.experience .tab-header > div'
);
let experienceContents = document.querySelectorAll(
  '.experience .tab-content > div'
);

for (let i = 0; i < experienceHeaders.length; i++) {
  experienceHeaders[i].addEventListener('click', function () {
    document
      .querySelector('.experience .tab-header > .active')
      .classList.remove('active');
    experienceHeaders[i].classList.add('active');
    document
      .querySelector('.experience .tab-content > .active')
      .classList.remove('active');
    experienceContents[i].classList.add('active');
  });
}

/*  End  */
