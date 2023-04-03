  // import {showMessage, showErrorMessage} from './message';
  // import {validation} from './form-validation';

  function validation(form) {

    let result = true;

    function removeError(input) {
      const parent = input.parentNode;

      if (parent.classList.contains('error')) {
        parent.querySelector('.error-message').remove();
        parent.classList.remove('error');
      }
    }

    function createError(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement('span')

      errorLabel.classList.add('error-message')
      errorLabel.textContent = text

      parent.classList.add('error')

      parent.append(errorLabel)
    }

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {

      removeError(input)

      if(input.dataset.validateType === 'phone') {
        if(phoneTest(input)) {
          removeError(input)
          createError(input, `Некорректный номер!`)
          result = false
        }
      }

      if (input.dataset.validateType === 'email') {
        if (emailTest(input)) {
          removeError(input)
          createError(input, `Некорректный адрес!`)
          result = false
        }
      }

      if (input.getAttribute("type") === "checkbox" && input.checked === false) {
         removeError(input)
         createError(input, `Подтвердите согласие!`)
         result = false
      }

      if(input.dataset.required == 'true') {
        if(input.value == "") {
          removeError(input)
          createError(input, 'Поле не заполнено!')
          result = false
        }
      }
    }

    function phoneTest (input) {
      return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
    }

    function emailTest (input) {
      return !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
    }

    return result
  }

  // const wrapper = document.querySelector('.wrapper');
  const form = document.getElementById('form');
  const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {
      input.removeAttribute("required");
      input.removeAttribute("pattern");
      input.removeAttribute("title");
    }

  function formSend () {
    form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validation(this) == true) {
      fetch('https://echo.htmlacademy.ru/', {
        method: 'POST',
        body: new FormData(event.target)
      })

        .then((response) => {
          if (response.ok) {
            // showMessage();
            form.reset();
            alert('форма отправлена')

          } else {
            alert('ошибка')
            // showErrorMessage()
          }
        })
    }
    })
  }
  // function formValidate(form) {
  //   let error = 0;
  //   let formReg = form.querySelectorAll('._reg');

  //   for (let index = 0; index < formReg.length; index++) {
  //     const input = formReg[index];
  //     formRemoveError(input);

  //     if (input.classList.contains('_email')) {
  //       if (emailTest(input)) {
  //         formAddError(input);
  //         error++;
  //       }
  //     } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
  //       formAddError(input);
  //       error++;
  //     } else {
  //       if (input.value === '') {
  //         formAddError(input);
  //         error++;
  //       }

  //     }
  //   }

  //   return error;
  // }

  // function formAddError(input) {
  //   input.parentElement.classList.add('_error');
  //   input.classList.add('_error')
  // }

  // function formRemoveError(input) {
  //   input.parentElement.classList.remove('_error');
  //   input.classList.remove('_error');
  // }

  // function emailTest (input) {
  //   return !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
  // }

  // const formImage = document.getElementById('formImage');

  // const formPreview = document.getElementById('formPreview');

  // formImage.addEventListener('change', () => {
  //   uploadFile(formImage.files[0]);
  // });

  // function uploadFile(file) {

  //   if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
  //     alert('Разрешены только изображения.');
  //     formImage.value = '';
  //     return;
  //   }

  //   if (file.size > 2 * 1024 * 1024) {
  //     alert('Файл должен быть менее 2 МБ.');
  //     return;
  //   }

  //   var reader = new FileReader();
  //   reader.onload = function (e) {
  //   formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
  //   };

  //   reader.onerror = function (e) {
  //   alert('Ошибка');
  //   };

  //   reader.readAsDataURL(file);
  // }

  export {formSend}
