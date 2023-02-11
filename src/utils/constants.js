const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]
export default initialCards

export const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
export const formEditProfileElement = document.querySelector('.popup__content_edit');
export const buttonOpenAddCardForm = document.querySelector('.profile__add');
export const formAddProfileElement = document.querySelector('.popup__content_add');
export const cardTemplate = document.querySelector('#template').content.querySelector('.element');
export const imgTemplateElement = cardTemplate.querySelector('.element__mask-group');
export const inputPopupProfileName = formEditProfileElement.querySelector('.popup__text_profile_name');
export const inputPopupProfileJob = formEditProfileElement.querySelector('.popup__text_profile_job')
export const validationConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_error',
  errorClass: 'popup__error'
};
export const buttonDeleteCard = imgTemplateElement.querySelector('.element__delete');
export const buttonOpenAvatarProfileForm = document.querySelector('.profile__avatar-edit');
export const formEditProfileAvatar = document.querySelector('.popup_user-avatar')
export const inputAvatarProfilePopup = formEditProfileAvatar.querySelector('.user-avatar-input');
export const userAvatar = document.querySelector('.profile__avatar')