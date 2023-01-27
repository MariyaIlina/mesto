import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(selectorPopup, handleSubmit) {
    super(selectorPopup)
    this._handleSubmit = handleSubmit
    this._form = this._popup.querySelector('.popup__content')
    this._inputs = [...this._form.querySelectorAll('.popup__text')]
  }
  _getInputValues() {
    const values = {}
    this._inputs.forEach(input => {
      values[input.name] = input.value
    })
    return values
  }

  setEventListeners() {
    super.setEventListeners()

    this._form.addEventListener('submit', (evt) => {
      this._handleSubmit(evt, this._getInputValues());
    });
  }

  close() {
    super.close()
    this._form.reset()
  }
  setFormData(values) {
    this._inputs.forEach(input => {
      const name = input.name
      if (values[name]) {
        input.value = values[name]
      }

    })
  }
}