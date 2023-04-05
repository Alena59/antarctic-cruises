const wrapper = document.querySelector('.wrapper');
const body = document.getElementById('body');
const templateError = document.querySelector('#error');
const templateSuccess = document.querySelector('#success');

const showMessage = () => {
  if (templateSuccess) {
    const successSubmitMessage = templateSuccess.content.querySelector('.success').cloneNode(true);

    const onCloseMessageClick = () => {
      successSubmitMessage.remove();
      body.style.overflow = 'scroll';
      successSubmitMessage.removeEventListener('click', onCloseMessageClick);
      document.removeEventListener('keydown', onMessageEscKeydown);
    };

    const onMessageEscKeydown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        onCloseMessageClick();
      }
    };

    wrapper.append(successSubmitMessage);
    body.style.overflow = 'hidden';
    successSubmitMessage.addEventListener('click', onCloseMessageClick);
    document.addEventListener('keydown', onMessageEscKeydown);
  }
};

const showErrorMessage = () => {
  if (templateError) {
    const errorSubmitMessage = templateError.content.querySelector('.error').cloneNode(true);

    const onErrorMessageClick = () => {
      errorSubmitMessage.remove();
      body.style.overflow = 'scroll';
      document.removeEventListener('keydown', onErrorMessageEscKeydown);
      errorSubmitMessage.removeEventListener('click', onErrorMessageClick);
    };

    const onErrorMessageEscKeydown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        onErrorMessageClick();
      }
    };

    wrapper.append(errorSubmitMessage);
    body.style.overflow = 'hidden';
    errorSubmitMessage.addEventListener('click', onErrorMessageClick);
    document.addEventListener('keydown', onErrorMessageEscKeydown);
  }
};

export {showErrorMessage, showMessage};
