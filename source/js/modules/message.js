const wrapper = document.querySelector('.wrapper');

const successSubmitMessage = document.querySelector('#success')
  .content
  .querySelector('.success')
  .cloneNode(true);

const errorSubmitMessage = document.querySelector('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);

const onCloseMessageClick = () => {
  successSubmitMessage.remove();
  successSubmitMessage.removeEventListener('click', onCloseMessageClick);
  document.removeEventListener('keydown', onMessageEscKeydown);
};

const showMessage = () => {
  wrapper.append(successSubmitMessage);
  successSubmitMessage.addEventListener('click', onCloseMessageClick);
  document.addEventListener('keydown', onMessageEscKeydown);
};

function onMessageEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onCloseMessageClick();
  }
}

const onErrorMessageClick = () => {
  errorSubmitMessage.remove();
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  errorSubmitMessage.removeEventListener('click', onErrorMessageClick);
};

function onErrorMessageEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onErrorMessageClick();
  }
}

const showErrorMessage = () => {
  document.body.append(errorSubmitMessage);
  errorSubmitMessage.addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
};

export {showErrorMessage, showMessage};
