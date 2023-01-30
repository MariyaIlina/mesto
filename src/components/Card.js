import { handleImageClick } from "../pages/index";
export class Card {
  constructor(data, templateElement) {
    this._templateElement = document.querySelector(templateElement).content.querySelector('.element');
    this._data = data;
    this._handleImageClick = handleImageClick;
  }

  _generateCard(){
    this._cardElement = this._templateElement.cloneNode(true);
  }
  
  getCard() {
    this._generateCard();
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

  _handleDeleteClick = () => {
    this._cardElement.remove()
  }

  _addEventListeners() {
    const likeButtonElement = this._cardElement.querySelector('.element__like');
    const deleteButtonElement = this._cardElement.querySelector('.element__delete');
    likeButtonElement.addEventListener('click', this._handleLikeClick);
    deleteButtonElement.addEventListener('click', this._handleDeleteClick);
    this._imgTemplateElement.addEventListener('click', () => this._handleImageClick(this._data.name, this._data.link));

  }

}


