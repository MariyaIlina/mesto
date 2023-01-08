import initialCards from './data.js';
import {Card} from './card.js';
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddProfile = document.querySelector('.popup_add');
const popupCloseElement = popupEditProfile.querySelector('.popup__close');
const popupCloseAddElement = popupAddProfile.querySelector('.popup__close_add')
const popupSaveElement = popupEditProfile.querySelector('.popup__save');
const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
const popupCreateElement = popupEditProfile.querySelector('.popup__create');
const formEditProfileElement = document.querySelector('.popup__content');
const nameInputformEditProfile = formEditProfileElement.querySelector('.popup__text_profile_name');
const jobInputformEditProfile = formEditProfileElement.querySelector('.popup__text_profile_job');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const buttonOpenAddCardForm = document.querySelector('.profile__add');
const nameInputformAddProfile = document.querySelector('.popup__text_add_name');
const linkInputformAddProfile = document.querySelector('.popup__text_add_link');
const formAddProfileElement = document.querySelector('.popup__content_add');
const templateElement = document.querySelector('#template').content.querySelector('.element');
const elements = document.querySelector('.elements');
const popupPreview = document.querySelector('.popup_preview');
const popupImgPreview = popupPreview.querySelector('.popup__img');
const popupCloseImgPreview = popupPreview.querySelector('.popup__close-preview');
const popupImgCaptionPreview = popupPreview.querySelector('.popup__caption');

const openPopup = (element) => {
  element.classList.add('popup_is-opened');
}
const closePopup = (element) => {
  element.classList.remove('popup_is-opened');
}
const likeButtonClick = (e) => {
  e.target.classList.toggle('element__like_active')
}

const deleteButtonClick = (e) => {
  e.target.closest('.element').remove()
}


function fillInFormInputs() {
  nameInputformEditProfile.value = nameProfile.textContent;
  jobInputformEditProfile.value = infoProfile.textContent;
}

function submitHandlerEditProfileForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInputformEditProfile.value;
  infoProfile.textContent = jobInputformEditProfile.value;
  closePopup(popupEditProfile);
}


const renderInitialCards = (item, wrapElement) => {
  const element = createElementPopupAddProfile(item);
  wrapElement.append(element);
}
const submitAddCardForm = (e) => {
  e.preventDefault()
  const cardData = {
    name: nameInputformAddProfile.value,
    link: linkInputformAddProfile.value,
  }
  const newElement = createElementPopupAddProfile(cardData);
  elements.prepend(newElement);
  closePopup(popupAddProfile);
  formAddProfileElement.reset();
}

// function createElementPopupAddProfile(item) {
//   const template = templateElement.cloneNode(true);
//   const likeButtonElement = template.querySelector('.element__like');
//   const deleteButtonElement = template.querySelector('.element__delete');
//   const titleTemplateElement = template.querySelector('.element__text');
//   const imgTemplateElement = template.querySelector('.element__mask-group');

//   titleTemplateElement.textContent = item.name;
//   imgTemplateElement.src = item.link;
//   imgTemplateElement.alt = item.name;

//   likeButtonElement.addEventListener('click', likeButtonClick);
//   deleteButtonElement.addEventListener('click', deleteButtonClick);

//   imgTemplateElement.addEventListener('click', () => {
//     popupImgPreview.src = item.link;
//     popupImgPreview.alt = item.link;
//     popupImgCaptionPreview.textContent = item.name;
//     openPopup(popupPreview);
//   })
//   return template;
// }

initialCards.forEach(function (item) {
  renderInitialCards(item, elements)
})


buttonOpenEditProfileForm.addEventListener('click', () => {
  openPopup(popupEditProfile);
  fillInFormInputs();
})

popupCloseElement.addEventListener('click', () => { closePopup(popupEditProfile) });
popupCloseImgPreview.addEventListener('click', () => { closePopup(popupPreview) });
buttonOpenAddCardForm.addEventListener('click', () => { openPopup(popupAddProfile) });
popupCloseAddElement.addEventListener('click', () => { closePopup(popupAddProfile) });
formAddProfileElement.addEventListener('submit', submitAddCardForm);
formEditProfileElement.addEventListener('submit', submitHandlerEditProfileForm);


// по тренажёру




// по вебинару
// initialCards.render(elements)
// class Renderable {
//   constructor(templateSelector) {
//     this._element = document.querySelector(templateSelector).content.children[0].cloneNode(true);
//   }

//   render(where) {
//     where.appendChild(this._element);
//   }
// }
// const Cardss = new Cards;
// class Cards extends Renderable {
//   static selectors = {
//     template: '#template',
//     formInputName: '.popup__text_add_name',
//     formInputLink: '.popup__text_add_link',
//   }
//   constructor(cards) {
//     super(Cards.selectors.template)
//     this._cards = cards;

//     this._handleSubmit = this._handleSubmit.bind(this);
//     this._element.querySelector('.popup__content_add').addEventListener('submit', this._handleSubmit);
//   }

//   _handleSubmit(event) {
//     event.preventDefault();
//     const name = event.currentTarget.querySelector(Cards.selectors.formInputName).value;

//     this._list.add(name)
//   }

//   render(where) {
//     this._cards.foreach(name => {
//       this.add(name);
//     });
//     super.render(where);
//   }

//   add(name) {
//     const card = new Cards(name);
//     card.render(this._element)
//   }
// }
// class Card extends Renderable {
//   static selectors = {
//     template: '#template',
//     name: '.element__text',
//     deleteButton: '.element__delete',
//     likeButtonClick: '.element__like',
//   }

//   constructor(name) {
//     super(Card.selectors.template);

//     this._element.querySelector(Card.selectors.text).textContent = name;
//     this._element.querySelector(Card.selectors.deleteButton).addEventListener('click', () => {
//       this._element.remove()
//     })
//     this._element.querySelector(Card.selectors.likeButton).addEventListener('click', () => {

//     })
//   }
// }

