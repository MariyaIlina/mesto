const checkInputValidity = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid) {
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
  } else {
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
    error.classList.add(config.errorClass);
  }
}

const toggleButton = (inputs, button, config) => {
  const isFormValid = inputs.every(input => input.validity.valid)
  if (isFormValid) {
    button.classList.remove(config.inactiveButtonClass)
    button.disabled = ''
  } else {
    button.classList.add(config.inactiveButtonClass)
    button.disabled = 'disabled'
  }
}

const enableValidation = (config) => {
  const { formSelector, inputSelector, submitButtonSelector, ...rest } = config
  const forms = [...document.querySelectorAll(formSelector)]
  forms.forEach(form => {
    const button = form.querySelector(submitButtonSelector);
    const inputs = [...form.querySelectorAll(inputSelector)];
    form.addEventListener('submit', (e) => {
      e.preventDefault
    })
    inputs.forEach(input => {
      input.addEventListener('input', () => {

        checkInputValidity(input, rest)

        toggleButton(inputs, button, rest)

      })
    })
  })

}
enableValidation({
  formSelector: '.popup__content',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error'
});


