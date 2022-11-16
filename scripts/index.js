const popupElement = document.querySelector('.popup'); 
const popupElementClose = popupElement.querySelector('.popup__close'); 
const popupElementSave = popupElement.querySelector('.popup__save');
const popupElementOpen = document.querySelector('.profile__edit'); 

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__text');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__text'); 

function openPopup() {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = profileName.textContent;
  jobInput.value =  profileInfo.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_is-opened');
  
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
  
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup();
}


popupElementOpen.addEventListener('click', openPopup);
popupElementClose.addEventListener('click', closePopup);
popupElementSave.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
  
let like = document.querySelector('.element__vector');

let toggleLike = function(){
like.classList.toggle('element__vector_active');
}
toggleLike();

like.addEventListener('click', toggleLike);