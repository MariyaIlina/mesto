import { openPopup, popupPreview, popupImgPreview, popupImgCaptionPreview} from "./index.js";
export class Card {
  constructor(data, templateElement) {
    this._templateElement = templateElement;
    this.data = data;
  }

  _likeButtonClick = (e) => {
    e.target.classList.toggle('element__like_active')
  }

  _deleteButtonClick = (e) => {
    e.target.closest('.element').remove()
  }

  _imgPreview = () => {
    popupImgPreview.src = this.data.link;
    popupImgPreview.alt = this.data.link;
    popupImgCaptionPreview.textContent = this.data.name;
    openPopup(popupPreview);
  }

  _addEventListeners() {
    const likeButtonElement = this._template.querySelector('.element__like');
    const deleteButtonElement = this._template.querySelector('.element__delete');
    likeButtonElement.addEventListener('click', this._likeButtonClick);
    deleteButtonElement.addEventListener('click', this._deleteButtonClick);
    this._imgTemplateElement.addEventListener('click', this._imgPreview);
  }

  getTemplate() {
    this._template = this._templateElement.cloneNode(true);
    const titleTemplateElement = this._template.querySelector('.element__text');
    this._imgTemplateElement = this._template.querySelector('.element__mask-group');
    titleTemplateElement.textContent = this.data.name;
    this._imgTemplateElement.src = this.data.link;
    this._imgTemplateElement.alt = this.data.name;
    this._addEventListeners()
    return this._template;
  }
}

