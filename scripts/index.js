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

// const openPopup =(popup) => {
//   popup.classList.add('popup_is-opened')
// }
// const closePopup= ()=> {
//   popupElement.forEach(function (element) {
//     element.classList.remove('popup_is-opened')
//   })
// }
// const editProfile = ( => {
//     nameInput.value = profileName.textContent;
//   jobInput.value = profileInfo.textContent;
// })
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup();
}

popupElementOpen.addEventListener('click', openPopup);
popupElementClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


const popupElementAdd = document.querySelector('.popup_add')
const popupCreate = popupElement.querySelector('.popup__create');
const popupAdd = document.querySelector('.profile__add');
const inputName = document.querySelector('.popup__text_add_name');
const inputLink = document.querySelector('.popup__text_add_link');
const popupAddClose = popupElementAdd.querySelector('.popup__close');
const formElementAdd = document.querySelector('.popup__content_add');
const templateElement = document.querySelector('#addtemplate').content.querySelector('.element');
const elements = document.querySelector('.elements');


function createElement(item) {
  const template = templateElement.cloneNode(true);
  const likeButton = template.querySelector('.element__like');
  const deleteButton = template.querySelector('.element__delete');
  const elementTitle = template.querySelector('.element__text');
  likeButton.addEventListener('click', likeButtonClick);
  deleteButton.addEventListener('click', deleteButtonClick);
  elementTitle.textContent = item.name;
  const elementLink = template.querySelector('.element__mask-group');
  elementLink.src = item.link;
  return template;

}

const likeButtonClick = (e) => {
  e.target.classList.toggle('element__like_active')
}

const deleteButtonClick = (e) => {
  e.target.closest('.element').remove()
}



const render = (item, wrapElement) => {
  const element = createElement(item);
  wrapElement.append(element);
}

initialCards.forEach(function (item) {
  render(item, elements)
})


const handleFormSubmit = (e) => {
  e.preventDefault()
  const addElement = [{
    name: inputName.value,
    link: inputLink.value
  }];
  render(addElement, elements);
  closePopup();
  e.target.reset();
}

function openPopupAdd() {
  popupElementAdd.classList.add('popup_is-opened');

}
function closePopupAdd() {
  popupElementAdd.classList.remove('popup_is-opened');
}


popupAdd.addEventListener('click', openPopupAdd);
popupAddClose.addEventListener('click', closePopupAdd);
formElementAdd.addEventListener('submit', handleFormSubmit)


// const popupImg = document.querySelector('.popup__img');
// const popupCloseImg = popupImg.querySelector('.popup__close');

// function openPopupImg() {
//   popupImg.classList.add('popup_is-opened');
// }
// function closePopupImg() {
//   popupImg.classList.remove('popup_is-opened');
// }

// function formSubmitHandlerImg(evt) {
//   evt.preventDefault();
//   closePopup();
// }
// elementLink.addEventListener('click', openPopupImg);
// popupCloseImg.addEventListener('click', closePopupImg);
// popupImg.addEventListener('submit', formSubmitHandlerImg);


