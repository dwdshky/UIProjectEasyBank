const body = document.querySelector('body');
const btnBurger = document.querySelector('#btnBurger');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has_fade');

btnBurger.addEventListener('click', () => {
  console.log('open burger');
  if (btnBurger.classList.contains('open')) {
    body.classList.remove('noscroll');
    btnBurger.classList.remove('open');
    fadeElems.forEach((elm) => {
      elm.classList.remove('fade-in');
      elm.classList.add('fade-out');
    });
  } else {
    body.classList.add('noscroll');
    btnBurger.classList.add('open');
    fadeElems.forEach((elm) => {
      elm.classList.remove('fade-out');
      elm.classList.add('fade-in');
    });
  }
});
