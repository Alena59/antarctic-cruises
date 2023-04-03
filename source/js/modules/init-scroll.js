const nav = document.querySelectorAll('.nav');
const catalog = document.getElementById('catalog');
const advantages = document.getElementById('advantages');
const contacts = document.getElementById('contacts');

function initScroll() {
  for (const allNav of nav) {
    allNav.addEventListener('click', function (e) {
      e.preventDefault();

      if(e.target.getAttribute('href') === '#catalog') {
        catalog.scrollIntoView({behavior: 'smooth'});
      }

      if(e.target.getAttribute('href') === '#advantages') {
        advantages.scrollIntoView({behavior: 'smooth'});
      }

      if(e.target.getAttribute('href') === '#contacts') {
        contacts.scrollIntoView({behavior: 'smooth'});
      }
    });
  }
}

export {initScroll};
