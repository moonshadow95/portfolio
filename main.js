'use strict';

// Make navbar transparent it's on the top
const navbar = document.querySelector('#navbar');
// 실제로 보여지는 높이를 가져오기 위해 getBoundingClientRect() 사용
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--bg');
  } else {
    navbar.classList.remove('navbar--bg');
  }
});

// Handle scrolling when click navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// Navbar menu show when click toggle button
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle scrolling home button
const homeBtn = document.querySelector('.home__btn');
homeBtn.addEventListener('click', () => {
  scrollIntoView('#about');
});

// Make sections fade out as window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Make about fade out as window scrolls down
const about = document.querySelector('.about__container--outer');
const aboutHeght = about.getBoundingClientRect().height;
const aboutTop = window.pageYOffset + about.getBoundingClientRect().top;
document.addEventListener('scroll', () => {
  if (window.outerWidth > 700) {
    about.style.opacity = 1.3 - (window.scrollY - aboutTop) / aboutHeght;
  } else {
    about.style.opacity = 1.5 - (window.scrollY - aboutTop) / aboutHeght;
  }
});

// Make skills fade out as window scrolls down
const skills = document.querySelector('.skills__container');
const skillsHeght = skills.getBoundingClientRect().height;
const skillsTop = window.pageYOffset + skills.getBoundingClientRect().top;
document.addEventListener('scroll', () => {
  if (window.outerWidth > 700) {
    skills.style.opacity = 1.4 - (window.scrollY - skillsTop) / skillsHeght;
  } else {
    skills.style.opacity = 1.5 - (window.scrollY - skillsTop) / skillsHeght;
  }
});

// Make works fade out as window scrolls down
const works = document.querySelector('.works__container');
const worksHeght = works.getBoundingClientRect().height;
const worksTop = window.pageYOffset + works.getBoundingClientRect().top;
document.addEventListener('scroll', () => {
  if (window.outerWidth > 700) {
    works.style.opacity = 1.4 - (window.scrollY - worksTop) / worksHeght;
  } else {
    works.style.opacity = 1.6 - (window.scrollY - worksTop) / worksHeght;
  }
});

// Show go to the top Button
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click Arrow Button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Projects filtering
const workBtnContainer = document.querySelector('.works__categories');
const projectContainer = document.querySelector('.works__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  // Remove Selection previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('animate-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('animate-out');
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
