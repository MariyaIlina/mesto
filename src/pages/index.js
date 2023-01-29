import './index.css';
import initialCards from '../components/data';
import { Card } from '../components/Card';
import { FormValidator } from '../components/FormValidator';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithForm } from '../components/PopupWithForm';
import { UserInfo } from '../components/UserInfo';
import { Section } from '../components/Section';
const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
const formEditProfileElement = document.querySelector('.popup__content_edit');
const buttonOpenAddCardForm = document.querySelector('.profile__add');
const formAddProfileElement = document.querySelector('.popup__content_add');
const cardTemplate = document.querySelector('#template').content.querySelector('.element');
const imgTemplateElement = cardTemplate.querySelector('.element__mask-group');
const inputPopupProfileName = formEditProfileElement.querySelector('.popup__text_profile_name');
const inputPopupProfileJob = formEditProfileElement.querySelector('.popup__text_profile_job')
export const validationConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error'
};

const createCard = (data) => {
  const element = new Card(data, cardTemplate);
  const card = element.getCard();
  cards.addItem(card)

}
export const handleImageClick = (name, link) => {
  popupWithImage.open(name, link)
}

const handleCardFormSubmit = (e, values) => {
  e.preventDefault();
  const data = {
    name: values.name,
    link: values.link
  }
  createCard(data)
  addCardPopup.close();
}



const editProfilePopup = new PopupWithForm('.popup_edit-profile', handleProfileFormSubmit)
editProfilePopup.setEventListeners()
const addCardPopup = new PopupWithForm('.popup_add', handleCardFormSubmit)
addCardPopup.setEventListeners()
const cardFormValidator = new FormValidator(validationConfig, formAddProfileElement)
cardFormValidator.enableValidation()
const profileFormValidator = new FormValidator(validationConfig, formEditProfileElement)
profileFormValidator.enableValidation()
const popupWithImage = new PopupWithImage('.popup_preview')
popupWithImage.setEventListeners()
const userInfo = new UserInfo({ name: '.profile__name', job: '.profile__text' })
const cards = new Section({ items: initialCards, renderer: createCard }, '.elements')
cards.renderCard();


imgTemplateElement.addEventListener('click', handleImageClick);

buttonOpenAddCardForm.addEventListener('click', () => {
  cardFormValidator.resetValidation()
  addCardPopup.open();
});

function handleProfileFormSubmit(evt, values) {
  evt.preventDefault();
  userInfo.setUserInfo(values.name, values.job)
  editProfilePopup.close();
}

buttonOpenEditProfileForm.addEventListener('click', () => {
  profileFormValidator.resetValidation()
  editProfilePopup.open();
  const { name, job } = userInfo.getUserInfo();
  inputPopupProfileName.value = name
  inputPopupProfileJob.value = job
 
})