let header = document.querySelector('.header');
let navToggle = document.querySelector('.nav__toggle');
const body = document.getElementById('body');
const link = document.querySelectorAll('.header__nav a');
const logo = document.querySelector('.header__link-logo');

header.classList.remove('is-nojs');
let lastFocus;
lastFocus = document.activeElement;

function focus(e) {
  if (e.keyCode === 9) {
    let focusable = header.querySelectorAll('a, button');
    if (focusable.length) {
      let first = focusable[0];
      let last = focusable[focusable.length - 1];
      let shift = e.shiftKey;
      if (shift) {
        if (e.target === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (e.target === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  }
}

const deactiveMenu = () => {
  body.style.overflow = 'scroll';
  header.classList.add('is-close');
  header.classList.remove('is-open');
}

function initMenu() {
  link.forEach(element => {
    element.addEventListener('click', function () {
      if (header.classList.contains('is-open')) {
        deactiveMenu();
      }
    })
  });

  link.forEach(element => {
    element.addEventListener('keydown', function (e) {
      if (header.classList.contains('is-open')) {
        if (e.keyCode === 13) {
          deactiveMenu();
        }
      }
    })
  })

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('is-close')) {
      header.classList.remove('is-close');
      header.classList.add('is-open');
      body.style.overflow = 'hidden';
      logo.focus();

      header.addEventListener('keydown', focus);

    } else {
      header.classList.add('is-close');
      header.classList.remove('is-open');
      body.style.overflow = 'scroll';
      header.removeEventListener('keydown', focus);
      lastFocus.focus();
    }
    })
  }

export {initMenu};
