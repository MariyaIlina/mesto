export class FormValidator {
  constructor(config, form) {
    this._form = form
    this._config = config
  }

  enableValidation() {
    const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector))
    const buttonSubmit = this._form.querySelector(this._config.submitButtonSelector)

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input)
        this._toggleButton(inputs, buttonSubmit)

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
  _hasInvalid = (inputs) => {
    return inputs.some((input) => {
      return !input.validity.valid;
    })
  }
  _showError = (input, errorMessage) => {
    const error = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(this._config.errorClass);
  }

  _hideError = (input) => {
    const error = this._form.querySelector(`#${input.id}-error`);

    input.classList.remove(this._config.inputErrorClass);
    error.classList.remove(this._config.errorClass);
    error.textContent = '';
  }

  _toggleButton = (inputs, buttonSubmit) => {
    if (this._hasInvalid(inputs)) {
      buttonSubmit.classList.add(this._config.inactiveButtonClass);
      buttonSubmit.disabled = 'disabled';
    } else {
      buttonSubmit.classList.remove(this._config.inactiveButtonClass)
      buttonSubmit.disabled = ''

    }
  }

  resetInput() {
    const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector))
    inputs.forEach(input => {
      this._hideError(input)
    })
  }
}
