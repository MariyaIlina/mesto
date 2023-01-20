import { nameInputFormAddProfile, linkInputFormAddProfile, handleImageClick, openPopup, popupPreview, popupImgPreview, popupImgCaptionPreview } from "./index.js";
export class Card {
  constructor(data, templateElement) {
    this._templateElement = templateElement;
    this._data = data;
    this._handleImageClick = handleImageClick;
  }

  
  getCard() {
    this._cardElement = this._templateElement.cloneNode(true);
    this._titleTemplateElement = this._cardElement.querySelector('.element__text');
    this._imgTemplateElement = this._cardElement.querySelector('.element__mask-group');
    this._titleTemplateElement.textContent = this._data.name;
    this._imgTemplateElement.src = this._data.link;
    this._imgTemplateElement.alt = this._data.name;
    this._addEventListeners()
    return this._cardElement;
  }

  _handleLikeClick = (e) => {
    e.target.classList.toggle('element__like_active')
  }

  _handleDeleteClick = (e) => {
    this._templateElement = null;
    e.target.closest('.element').remove()
  }
  
_addEventListeners() {
    const likeButtonElement = this._cardElement.querySelector('.element__like');
    const deleteButtonElement = this._cardElement.querySelector('.element__delete');
    likeButtonElement.addEventListener('click', this._handleLikeClick);
    deleteButtonElement.addEventListener('click', this._handleDeleteClick);
    this._imgTemplateElement.addEventListener('click', this._handleImageClick);

  }

}


