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
  scrollIntoView(link);
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
const about = document.querySelector('.about__container');
const aboutHeght = about.getBoundingClientRect().height;
const aboutTop = window.pageYOffset + about.getBoundingClientRect().top;
document.addEventListener('scroll', () => {
  about.style.opacity = 1 - (window.scrollY - aboutTop) / aboutHeght;
});

// Make skills fade out as window scrolls down
const skills = document.querySelector('.skills__container');
const skillsHeght = skills.getBoundingClientRect().height;
const skillsTop = window.pageYOffset + skills.getBoundingClientRect().top;
document.addEventListener('scroll', () => {
  skills.style.opacity = 1 - (window.scrollY - skillsTop) / skillsHeght;
});

// Make works fade out as window scrolls down
const works = document.querySelector('.works__container');
const worksHeght = works.getBoundingClientRect().height;
const worksTop = window.pageYOffset + works.getBoundingClientRect().top;
document.addEventListener('scroll', () => {
  works.style.opacity = 1 - (window.scrollY - worksTop) / worksHeght;
});

// Show Up Button
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
