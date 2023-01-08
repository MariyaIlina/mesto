import initialCards from "./data.js";
export class Card {
  constructor(data, templateSelector, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;

  }
  // вернуть разметку карточки через return
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }
  
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListenersLike();
    this._setEventListenersDelete();
    this._setEventListenersPreview();
    // Добавим данные
    this._element.querySelector('.element__mask-group').src = this._link;
    this._element.querySelector('.element__text').textContent = this._name;

    return this._element;
  }
  _setEventListenersLike() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
  }
  _handleLikeClick() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _setEventListenersDelete() {
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDeleteClick();
    })
  };
  _handleLikeClick() {
    this._element.querySelector('.element').remove;
  }
  _setEventListenersPreview() {
    this._element.querySelector('.element__mask-group').addEventListener('click', () => {
      this._handlePreviewClick();
    })
  }
  _handlePreviewClick() {
    openPopup(popupPreview);
  }
}


initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();
  document.body.append(cardElement); //elements.append(cardElement)
});

