import { nameInputFormAddProfile,  linkInputFormAddProfile, handleImageClick, openPopup, popupPreview, popupImgPreview, popupImgCaptionPreview } from "./index.js";
export class Card {
  constructor(data, templateElement, handleImageClick) {
    this._templateElement = templateElement;
    this._data = data;
    this._handleImageClick = handleImageClick;
    
     }


  getCard() {
    const cardTemplate = this._templateElement;
    this._cardElement = cardTemplate.cloneNode(true);
    const titleTemplateElement = this._cardElement.querySelector('.element__text');
    this._imgTemplateElement =this._cardElement.querySelector('.element__mask-group');
    titleTemplateElement.textContent = this._data.name;
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
    // e.target.closest('.element').remove()
  }

  _handleCardFormSubmit = (e) => {
    e.preventDefault()
    this._data = {
      name: nameInputFormAddProfile.value,
      link: linkInputFormAddProfile.value,
    } 
  }
    _addEventListeners() {
      const likeButtonElement = this._cardElement.querySelector('.element__like');
      const deleteButtonElement = this._cardElement.querySelector('.element__delete');
      const buttonSubmit = this._data.querySelector('.popup__button');
      likeButtonElement.addEventListener('click', this._handleLikeClick);
      deleteButtonElement.addEventListener('click', this._handleDeleteClick);
      this._imgTemplateElement.addEventListener('click', this._handleImageClick(this._data.name, this._data.name));
      buttonSubmit.addEventListener('submit', this._handleCardFormSubmit);
    }

  }


