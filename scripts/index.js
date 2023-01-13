import initialCards from './data.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidation.js';
export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupAddProfile = document.querySelector('.popup_add');
const popupCloseElement = popupEditProfile.querySelector('.popup__close');
const popupCloseAddElement = popupAddProfile.querySelector('.popup__close_add')
const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
export const formEditProfileElement = document.querySelector('.popup__content');
export const nameInputformEditProfile = formEditProfileElement.querySelector('.popup__text_profile_name');
export const jobInputformEditProfile = formEditProfileElement.querySelector('.popup__text_profile_job');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const buttonOpenAddCardForm = document.querySelector('.profile__add');
export const nameInputformAddProfile = document.querySelector('.popup__text_add_name');
export const linkInputformAddProfile = document.querySelector('.popup__text_add_link');
export const formAddProfileElement = document.querySelector('.popup__content_add');
export const templateElement = document.querySelector('#template').content.querySelector('.element');
export const elements = document.querySelector('.elements');
export const popupPreview = document.querySelector('.popup_preview');
export const popupImgPreview = popupPreview.querySelector('.popup__img');
const popupCloseImgPreview = popupPreview.querySelector('.popup__close-preview');
export const popupImgCaptionPreview = popupPreview.querySelector('.popup__caption');

export const openPopup = (element) => {
  element.classList.add('popup_is-opened');
  addFormValidator.resetInput()
  editFormValidator.resetInput()
  document.addEventListener('keyup', handleKeyUp);
}

export const closePopup = (element) => {
  element.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', handleKeyUp);
}

const closeOverlayPopup = (e) => {
  const popupOpen = document.querySelector('.popup_is-opened')
  if (!e.target.closest('.popup__container')) {
    closePopup(popupOpen);
  }
}

const handleKeyUp = (e) => {
  if (e.key === 'Escape') {
    const openPopup = document.querySelector('.popup_is-opened')
    closePopup(openPopup);
  }
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

const submitAddCardForm = (e) => {
  e.preventDefault()
  const cardData = {
    name: nameInputformAddProfile.value,
    link: linkInputformAddProfile.value,
  } 
  
  const newElement = new Card(cardData, templateElement);
  const card = newElement.getTemplate();
  elements.prepend(card);
  closePopup(popupAddProfile);
  formAddProfileElement.reset();
}

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
popupEditProfile.addEventListener('click', closeOverlayPopup);
popupAddProfile.addEventListener('click', closeOverlayPopup);
popupPreview.addEventListener('click', closeOverlayPopup);


const renderInitialCards = (data, wrapElement) => {
  const element = new Card(data, templateElement)
  const card = element.getTemplate();
  wrapElement.append(card);
}

initialCards.forEach(function (data) {
  renderInitialCards(data, elements)
})

export const validationConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error'
};
const addFormValidator = new FormValidator(validationConfig, formAddProfileElement)
addFormValidator.enableValidation()

const editFormValidator = new FormValidator(validationConfig, formEditProfileElement)
editFormValidator.enableValidation()