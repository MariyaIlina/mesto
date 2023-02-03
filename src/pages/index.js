import './index.css';
import initialCards from '../utils/constants';
import { Card } from '../components/Card';
import { FormValidator } from '../components/FormValidator';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithForm } from '../components/PopupWithForm';
import { UserInfo } from '../components/UserInfo';
import { Section } from '../components/Section';
import { buttonOpenEditProfileForm, formEditProfileElement, buttonOpenAddCardForm, formAddProfileElement, imgTemplateElement, inputPopupProfileName, inputPopupProfileJob, validationConfig } from '../utils/constants'
import '../components/Api';

const createCard = (data) => {
  const element = new Card(data, '#template');
  const card = element.getCard();
  cards.addItem(card)

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

const handleCardFormSubmit = (e, values) => {
  e.preventDefault();
  const data = {
    name: values.name,
    link: values.link
  }
  createCard(data)
  addCardPopup.close();
}
function handleProfileFormSubmit(evt, values) {
  evt.preventDefault();
  userInfo.setUserInfo(values.name, values.job)
  editProfilePopup.close();
}

export const handleImageClick = (name, link) => {
  popupWithImage.open(name, link)
}

imgTemplateElement.addEventListener('click', handleImageClick);

buttonOpenAddCardForm.addEventListener('click', () => {
  cardFormValidator.resetValidation()
  addCardPopup.open();
});

buttonOpenEditProfileForm.addEventListener('click', () => {
  profileFormValidator.resetValidation()
  editProfilePopup.open();
  const { name, job } = userInfo.getUserInfo();
  inputPopupProfileName.value = name
  inputPopupProfileJob.value = job

})