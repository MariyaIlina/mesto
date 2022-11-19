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

