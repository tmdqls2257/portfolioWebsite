'use strict';
// Make navbar transparent blue
const navbar = document.querySelector('#navbar');
document.addEventListener('scroll', () => {
  if(window.scrollY > 500){
    navbar.classList.add('navbar--blue');
  }else{
    navbar.classList.remove('navbar--blue');
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