const header = document.querySelector('.header');
const headerContainer = document.querySelector('.header__container');
const headerToggle = document.querySelector('.header__checkbox');
const body = document.getElementById('body');
const link = document.querySelectorAll('.header__nav a');

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
  if (link && headerToggle && header && body && headerContainer) {
    link.forEach((element) => {
      element.addEventListener('click', function () {
        if (header.classList.contains('is-open')) {
          deactiveMenu();
        }
      });
    });

    headerToggle.addEventListener('click', function () {
      header.classList.toggle('is-open');

      if (header.classList.contains('is-open')) {
        body.style.overflow = 'hidden';
        header.addEventListener('keydown', focus);
      }

      if (!header.classList.contains('is-open')) {
        body.style.overflow = 'scroll';
        header.removeEventListener('keydown', focus);
      }
    });

    document.addEventListener('click', function (e) {
      if (headerToggle.getAttribute('type') === 'checkbox' && headerToggle.checked === true) {
        if (e.target === headerContainer) {
          deactiveMenu();
        }
      }
    });
  }
}

export {initMenu};
