  import {showMessage, showErrorMessage} from './message';
  import {validateForm} from './form-validation';

  const form = document.getElementById('form');

  if (form) {
    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {
      input.removeAttribute("required");
      input.removeAttribute("pattern");
      input.removeAttribute("title");
    }
  }

  function sendForm () {
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm(this) == true) {
          fetch('https://echo.htmlacademy.ru/', {
            method: 'POST',
            body: new FormData(event.target)
          })
            .then((response) => {
              if (response.ok) {
                showMessage();
                form.reset();
              } else {
                showErrorMessage();
              }
            })
        }
      })
    }
  }


  export {sendForm}
