const popupElement = document.querySelector('.popup');
const popupElementClose = popupElement.querySelector('.popup__close');
const popupElementSave = popupElement.querySelector('.popup__save');
const popupElementOpen = document.querySelector('.profile__edit');

let formElement = document.querySelector('.popup__content');
let nameInput = formElement.querySelector('.popup__text_profile_name');
let jobInput = formElement.querySelector('.popup__text_profile_job');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__text');

function openPopup() {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_is-opened');

}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup();
}

popupElementOpen.addEventListener('click', openPopup);
popupElementClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

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
];
const popupElementAdd = document.querySelector('.popup_add')
const popupCreate = popupElement.querySelector('.popup__create');
const popupAdd = document.querySelector('.profile__add');
let inputName = document.querySelector('.popup__text_add_name');
let inputLink = document.querySelector('.popup__text_add_link');
let elementTitle = document.querySelector('.element__text');
let elementLink = document.querySelector('.element__mask-group');
let popupAddClose = document.querySelector('.popup__close_add');
let formElementAdd = document.querySelector('.popup__content_add');
const templateElement = document.querySelector('#addtemplate');

function openPopupAdd() {
  popupElementAdd.classList.add('.popup_add_is-opened');
 
}

function closePopupAdd() {
  popupElementAdd.classList.remove('.popup_add_is-opened');
}
function formSubmitHandlerAdd(evt) {
  evt.preventDefault();

  // elementTitle.textContent = inputName.value;
  // elementLink.textContent = inputLink.value;
  closePopupAdd();
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);
popupAdd.addEventListener('click', openPopupAdd);
popupAddClose.addEventListener('click', closePopupAdd);

// initialCards.forEach(function(item){
//   console.log(item);
// })
