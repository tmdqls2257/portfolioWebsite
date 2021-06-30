'use strict';

const arrowBtn = document.querySelector('.home__arrow');

// Make navbar transparent blue
const navbar = document.querySelector('#navbar');
document.addEventListener('scroll', () => {
  if(window.scrollY > 500){
    navbar.classList.add('navbar--blue');
    arrowBtn.classList.add('visable');
  }else{
    navbar.classList.remove('navbar--blue');
    arrowBtn.classList.remove('visable');
  }
});


// !select navbar menu to move!
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener(`click`, (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  } else {
    scrollIntoView(link);
  }
});

// Handle click on "contact me"
const homeContact = document.querySelector(".home__contact");

homeContact.addEventListener(`click`, (event) => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// arrow that go to top

  arrowBtn.addEventListener('click', () => {
    scrollIntoView('#Home');
  });

// My work
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector(`.work__projects`);

workBtnContainer.addEventListener('click', (event) => {
  const filter = event.target.dataset.fillter || event.target.parentNode.dataset.filter;
  console.log(filter);
});