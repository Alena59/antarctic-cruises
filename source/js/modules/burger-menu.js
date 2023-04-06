let header = document.querySelector('.header');
let headerToggle = document.querySelector('.header__checkbox');
const body = document.getElementById('body');
const link = document.querySelectorAll('.header__nav a');
const logo = document.querySelector('.header__link-logo');

if (header) {
  header.classList.remove('is-nojs');
}

let lastFocus;
lastFocus = document.activeElement;

function focus(e) {
  if (e.keyCode === 9) {
    let focusable = header.querySelectorAll('a, input');
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
  header.classList.remove('is-open');
  headerToggle.checked = false;
};

function initMenu() {
  if (link && logo && headerToggle && header && body) {
    link.forEach((element) => {
      element.addEventListener('click', function () {
        if (header.classList.contains('is-open')) {
          deactiveMenu();
        }
      });
    });

    headerToggle.addEventListener('click', function () {
      if (headerToggle.getAttribute('type') === 'checkbox' && headerToggle.checked === true) {
        header.classList.add('is-open');
        body.style.overflow = 'hidden';
        logo.focus();

        header.addEventListener('keydown', focus);

      } else {
        header.classList.remove('is-open');
        body.style.overflow = 'scroll';
        header.removeEventListener('keydown', focus);
        lastFocus.focus();
      }
    });
  }
}

export {initMenu};
