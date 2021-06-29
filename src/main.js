'use strict';
// Make navbar transparent blue
const navbar = document.querySelector('#navbar');
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    navbar.classList.add('navbar--blue');
  }else{
    navbar.classList.remove('navbar--blue');
  }
});