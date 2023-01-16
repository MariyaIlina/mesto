import initialCards from './data.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupAddProfile = document.querySelector('.popup_add');
const popupCloseEditElement = popupEditProfile.querySelector('.popup__close');
const popupCloseAddElement = popupAddProfile.querySelector('.popup__close_add')
const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
export const formEditProfileElement = document.querySelector('.popup__content');
export const nameInputFormEditProfile = formEditProfileElement.querySelector('.popup__text_profile_name');
export const jobInputFormEditProfile = formEditProfileElement.querySelector('.popup__text_profile_job');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const buttonOpenAddCardForm = document.querySelector('.profile__add');
export const nameInputFormAddProfile = document.querySelector('.popup__text_add_name');
export const linkInputFormAddProfile = document.querySelector('.popup__text_add_link');
export const formAddProfileElement = document.querySelector('.popup__content_add');
export const cardTemplate = document.querySelector('#template').content.querySelector('.element');
export const cardsContainer = document.querySelector('.elements');
export const popupPreview = document.querySelector('.popup_preview');
export const popupImgPreview = popupPreview.querySelector('.popup__img');
const popupCloseImgPreview = popupPreview.querySelector('.popup__close-preview');
export const popupImgCaptionPreview = popupPreview.querySelector('.popup__caption');

export const openPopup = (element) => {
  element.classList.add('popup_is-opened');
  cardFormValidator.resetInput()
  profileFormValidator.resetInput()
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
  nameInputFormEditProfile.value = nameProfile.textContent;
  jobInputFormEditProfile.value = infoProfile.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInputFormEditProfile.value;
  infoProfile.textContent = jobInputFormEditProfile.value;
  closePopup(popupEditProfile);
}


buttonOpenEditProfileForm.addEventListener('click', () => {
  openPopup(popupEditProfile);
  fillInFormInputs();
})

 export const handleImageClick = () => {
  popupImgPreview.src = data.link;
  popupImgPreview.alt = data.link;
  popupImgCaptionPreview.textContent = data.name;
  openPopup(popupPreview);
}
const handleCardFormSubmit = (e) => {
  e.preventDefault()
  const data = {
    name: nameInputFormAddProfile.value,
    link: linkInputFormAddProfile.value,
  } 
 } 
const imgTemplateElement = cardTemplate.querySelector('.element__mask-group');
imgTemplateElement.addEventListener('click', handleImageClick);
popupCloseEditElement.addEventListener('click', () => { closePopup(popupEditProfile) });
popupCloseImgPreview.addEventListener('click', () => { closePopup(popupPreview) });
buttonOpenAddCardForm.addEventListener('click', () => { openPopup(popupAddProfile) });
popupCloseAddElement.addEventListener('click', () => { closePopup(popupAddProfile) });
formAddProfileElement.addEventListener('submit', handleCardFormSubmit);
formEditProfileElement.addEventListener('submit', handleProfileFormSubmit);
popupEditProfile.addEventListener('click', closeOverlayPopup);
popupAddProfile.addEventListener('click', closeOverlayPopup);
popupPreview.addEventListener('click', closeOverlayPopup);


const renderInitialCards = (data, cardsContainer) => {
  const element = new Card(data, cardTemplate)
  const card = element.getTemplate();
  cardsContainer.append(card);
  closePopup(popupAddProfile);
  formAddProfileElement.reset();
}


initialCards.forEach(function (data) {
  renderInitialCards(data, cardsContainer)
})

export const validationConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error'
};
const cardFormValidator = new FormValidator(validationConfig, formAddProfileElement)
cardFormValidator.enableValidation()

const profileFormValidator = new FormValidator(validationConfig, formEditProfileElement)
profileFormValidator.enableValidation()