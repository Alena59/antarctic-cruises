const nav = document.querySelector('.nav');
const catalog = document.getElementById('catalog');
const advantages = document.getElementById('advantages');
const contacts = document.getElementById('contacts');

function initScroll() {
  nav.addEventListener('click', function (e) {
    if(e.target.getAttribute('href') === '#catalog') {
      e.preventDefault();
      catalog.scrollIntoView({behavior: 'smooth'});
    }

    if(e.target.getAttribute('href') === '#advantages') {
      e.preventDefault();
      advantages.scrollIntoView({behavior: 'smooth'});
    }

    if(e.target.getAttribute('href') === '#contacts') {
      e.preventDefault();
      contacts.scrollIntoView({behavior: 'smooth'});
    }
  });
}

export {initScroll};
