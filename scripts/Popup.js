export class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup)
  }

  open() {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this.close()
    }
  }
  setEventListeners() {
    this._popup.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close'))
        this.close()
    })
  }
}
