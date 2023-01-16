import { nameInputFormAddProfile, linkInputFormAddProfile, handleImageClick, openPopup, popupPreview, popupImgPreview, popupImgCaptionPreview } from "./index.js";
export class Card {
  constructor(data, templateElement, handleImageClick) {
    this._templateElement = templateElement;
    this._data = data;
    this._handleImageClick = handleImageClick;
  }
  getTemplate() {
    this._template = this._templateElement.cloneNode(true);
    const titleTemplateElement = this._template.querySelector('.element__text');
    this._imgTemplateElement = this._template.querySelector('.element__mask-group');
    titleTemplateElement.textContent = this._data.name;
    this._imgTemplateElement.src = this._data.link;
    this._imgTemplateElement.alt = this._data.name;
    this._addEventListeners()
    return this._template;
  }

  _handleLikeClick = (e) => {
    e.target.classList.toggle('element__like_active')
  }

  _handleDeleteClick = (e) => {
    this._templateElement = null;
    e.target.closest('.element').remove()
  }

  // _handleCardFormSubmit = (e) => {
  //   e.preventDefault()
  //   this._data = {
  //     name: nameInputFormAddProfile.value,
  //     link: linkInputFormAddProfile.value,
  //   }}
    _addEventListeners() {
      const likeButtonElement = this._template.querySelector('.element__like');
      const deleteButtonElement = this._template.querySelector('.element__delete');
      likeButtonElement.addEventListener('click', this._handleLikeClick);
      deleteButtonElement.addEventListener('click', this._handleDeleteClick);
      this._imgTemplateElement.addEventListener('click', this._handleImageClick);
    }

  }


console.log()
