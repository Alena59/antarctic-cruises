function validateForm(form) {

  let result = true;

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error-validation')) {
      parent.querySelector('.error-message').remove();
      parent.classList.remove('error-validation');
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorSpan = document.createElement('span');

    errorSpan.classList.add('error-message');
    errorSpan.textContent = text;

    parent.classList.add('error-validation');

    parent.append(errorSpan);
  }

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {

    removeError(input);

    if (input.dataset.validateType === 'phone') {
      if (phoneTest(input)) {
        removeError(input);
        createError(input, 'Некорректный номер!');
        result = false;
      }
    }

    if (input.dataset.validateType === 'email') {
      if (emailTest(input)) {
        removeError(input);
        createError(input, 'Некорректный адрес!');
        result = false;
      }
    }

    if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
      removeError(input);
      createError(input, 'Подтвердите согласие!');
      result = false;
    }

    if (input.dataset.required === 'true') {
      if (input.value === '') {
        removeError(input);
        createError(input, 'Поле не заполнено!');
        result = false;
      }
    }
  }

  function phoneTest(input) {
    return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
  }

  function emailTest(input) {
    return !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
  }

  return result;
}

export {validateForm};
