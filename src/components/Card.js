import { handleImageClick } from "../pages/index";
export class Card {
  constructor(data, userId, templateElement, handleDeleteClick, handleLikeClick) {
    this._templateElement = document.querySelector(templateElement).content.querySelector('.element');
    this._data = data;
    this._id = data._id;
    //  console.log('getId=>', this._id)
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._LikeClick = handleLikeClick;
    this._likes = data.likes; 
    // console.log('this._likes=>', this._likes)
    this._ownerId = data.owner._id; 
    // console.log('this._ownerId=>', this._ownerId)
    this._myId = userId;

  }

  _generateCard() {
    this._cardElement = this._templateElement.cloneNode(true);
  }

  getCard() {
    this._generateCard();
    this._likeButtonElement = this._cardElement.querySelector('.element__like');
    this._titleTemplateElement = this._cardElement.querySelector('.element__text');
    this._imgTemplateElement = this._cardElement.querySelector('.element__mask-group');
    this._deleteButtonElement = this._cardElement.querySelector('.element__delete');
    this._counterLikes = this._cardElement.querySelector('.element__like-counter');
    this._titleTemplateElement.textContent = this._data.name;
    this._imgTemplateElement.src = this._data.link;
    this._imgTemplateElement.alt = this._data.name;
    this._counterLikes.textContent = this._likes.length;
    this._checkDeleteState()
    this._addEventListeners()
    return this._cardElement;
  }

  getId() {
    return this._id
  }

  _checkDeleteState() {

    if (this._ownerId !== this._myId) {
      this._deleteButtonElement.remove();
    }
  }

  _checkCounterLikes = () => {
    return this._likeButtonElement.classList.contains('element__like_active');
  }

  addLike() {
    this._likeButtonElement.classList.add('element__like_active');
    this._counterLikes.textContent = ++this._likes.length;
  }

  removeLike() {
    this._likeButtonElement.classList.remove('element__like_active');
    this._counterLikes.textContent = --this._likes.length;
  }


  _handleLikeClick = () => {
     this._LikeClick(this._checkCounterLikes());
  }

  deleteCard = () => {
    this._cardElement.remove()
  }

  _addEventListeners() {
    this._likeButtonElement.addEventListener('click', this._handleLikeClick);
    this._deleteButtonElement.addEventListener('click', () => this._handleDeleteClick(this._id));
    this._imgTemplateElement.addEventListener('click', () => this._handleImageClick(this._data.name, this._data.link));
  }

}


