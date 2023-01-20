export class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._config = config;
    this._buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._inactiveButtonClass = this._config.inactiveButtonClass;
  }

  enableValidation() {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input)
        this._toggleButton(this._inputs, this._buttonSubmit)
      });
    });

  }
  _checkInputValidity = (input) => {

    if (input.validity.valid) {
      this._hideError(input)

    } else {
      this._showError(input, input.validationMessage)

    }
  }
  _hasInvalid = () => {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    })
  }
  _showError = (input, errorMessage) => {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.classList.add(this._errorClass);
    error.textContent = errorMessage;
    input.classList.add(this._inputErrorClass);
  }
  _hideError = (input) => {
    const error = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    error.classList.remove(this._config.errorClass);
    error.textContent = '';
  }
  _toggleButton = () => {
    if (this._hasInvalid(this._inputs)) {
      this._disableSubmitButton()
    } else {
      this._buttonSubmit.classList.remove(this._inactiveButtonClass)
      this._buttonSubmit.disabled = false;

    }
  }
  _disableSubmitButton = () => {
    this._buttonSubmit.classList.add(this._inactiveButtonClass);
    this._buttonSubmit.disabled = 'disabled';
  }
  resetValidation() {
    this._inputs.forEach(input => {
      this._hideError(input)
    })
    this._disableSubmitButton()
  }
}


