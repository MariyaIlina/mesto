import './index.css';
import { Card } from '../components/Card';
import { FormValidator } from '../components/FormValidator';
import { PopupWithImage } from '../components/PopupWithImage';
import { PopupWithForm } from '../components/PopupWithForm';
import { UserInfo } from '../components/UserInfo';
import { Section } from '../components/Section';
import { formEditProfileAvatar, buttonOpenAvatarProfileForm, buttonOpenEditProfileForm, formEditProfileElement, buttonOpenAddCardForm, formAddProfileElement, imgTemplateElement, inputPopupProfileName, inputPopupProfileJob, validationConfig } from '../utils/constants'
import { api } from '../components/Api';
import { PopupWithConfimation } from '../components/PopupWithConfirmation';
import { data } from 'autoprefixer';

let userId

Promise.all([api.getUserInfo(), api.getImages()])
  .then((res) => {
    userId = res[0]._id // `res[0]` это данные профиля
    cards.renderCard(res[1]) //`res[1]` это карточки 
    userInfo.setUserInfo(res[0].name, res[0].about) //`res[0]` это данные профиля
    userInfo.setAvatarInfo(res[0].avatar) //`res[0]` это данные профиля
  })
  .catch((error) => console.log(`Ошибка ${error}`));

const createCard = (data) => {
  const card = new Card(data, userId, '#template',
    function handleDeleteClick() {
      popupWithDeleteImage.open();
      popupWithDeleteImage.setSubmit(() => {
        api.deleteCard(data._id)
          .then((res) => {
            card.deleteCard(),
              popupWithDeleteImage.close()
          })
          .catch((error) => console.log(`Ошибка ${error}`));
      })
    },

    function handleLikeClick(isLike) {
      if (isLike) {
        api.deleteLike(card.getId())
          .then(card.removeLike())
          .catch((error) =>
            console.log(`Ошибка ${error} при удалении лайка`)
          );
      } else {
        api.putLike(card.getId())
          .then(card.addLike())
          .catch((error) =>
            console.log(`Ошибка ${error} при отправке лайка`)
          )
      }
    }
  );

  cards.addItem(card.getCard())

}

const editProfilePopup = new PopupWithForm('.popup_edit-profile', handleProfileFormSubmit)
editProfilePopup.setEventListeners()
const addCardPopup = new PopupWithForm('.popup_add', handleCardFormSubmit)
addCardPopup.setEventListeners()
const cardFormValidator = new FormValidator(validationConfig, formAddProfileElement)
cardFormValidator.enableValidation()
const profileFormValidator = new FormValidator(validationConfig, formEditProfileElement)
profileFormValidator.enableValidation()
const avatarFormValidation = new FormValidator(validationConfig, formEditProfileAvatar)
avatarFormValidation.enableValidation()
const popupWithImage = new PopupWithImage('.popup_preview')
popupWithImage.setEventListeners()
const userInfo = new UserInfo({ name: '.profile__name', about: '.profile__text', avatar: '.profile__avatar' })
const cards = new Section({ renderer: createCard }, '.elements');
const editAvatarPopup = new PopupWithForm('.popup_user-avatar', handleAvatarSubmit);
editAvatarPopup.setEventListeners();
const popupWithDeleteImage = new PopupWithConfimation('.popup_delete-image')
popupWithDeleteImage.setEventListeners();
export const handleImageClick = (name, link) => {
  popupWithImage.open(name, link)
};

function handleAvatarSubmit(e, avatar) {
  e.preventDefault();
  editAvatarPopup.setButtonText('Сохранение...')
  api.editAvatar(avatar.link)
    .then((res) => {
      userInfo.setAvatarInfo(avatar.link)
      editAvatarPopup.close();
    })
    .catch(error => console.log(`Ошибка при отправке аватара ${error}`))
    .finally(() => {
      editAvatarPopup.setButtonText('Сохранить')
    })
}

function handleCardFormSubmit(e, values) {
  e.preventDefault();
  addCardPopup.setButtonText('Сохранение...')
  api.addCard(values.name, values.link)
    .then((res) => {
      createCard(res);
      addCardPopup.close();
    })
    .finally(() => {
      addCardPopup.setButtonText('Сохранить')
    })

}
function handleProfileFormSubmit(e, res) {
  e.preventDefault();
  editProfilePopup.setButtonText('Сохранение...')
  api.editProfile(res.name, res.about)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about)
      editProfilePopup.close();
    })
    .finally(() => {
      editProfilePopup.setButtonText('Сохранить')

    })
}

imgTemplateElement.addEventListener('click', handleImageClick);

buttonOpenAvatarProfileForm.addEventListener('click', () => {
  avatarFormValidation.resetValidation();
  editAvatarPopup.open();
})

buttonOpenAddCardForm.addEventListener('click', () => {
  cardFormValidator.resetValidation()
  addCardPopup.open();
});

buttonOpenEditProfileForm.addEventListener('click', () => {
  profileFormValidator.resetValidation()
  editProfilePopup.open();
  const { name, about } = userInfo.getUserInfo();
  inputPopupProfileName.value = name
  inputPopupProfileJob.value = about
})
