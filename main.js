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

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
