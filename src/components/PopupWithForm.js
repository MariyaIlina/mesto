import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(selectorPopup, handleSubmit) {
    super(selectorPopup)
    this._handleSubmit = handleSubmit
    this._form = this._popup.querySelector('.popup__content')
    this._inputs = [...this._form.querySelectorAll('.popup__text')]
    this._button = this._form.querySelector('.popup__button')
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
      evt.preventDefault();
      this._handleSubmit(evt, this._getInputValues());
    });
  }

  close() {
    super.close()
    this._form.reset()
  }

  setButtonText = (text) => {
    this._button.textContent = text
  }

  // setInputValues(data) {
  //   this._inputs.forEach((input) => {
  //     input.value = data[input.name];
  //   });
  // }
}