import initialCards from './data.js';
const popupElement = document.querySelector('.popup');
const popupElementAdd = document.querySelector('.popup_add');
const popupElementClose = popupElement.querySelector('.popup__close');
const popupElementCloseAdd = popupElementAdd.querySelector('.popup__close_add')
const popupElementSave = popupElement.querySelector('.popup__save');
const popupElementOpen = document.querySelector('.profile__edit');
const popupCreate = popupElement.querySelector('.popup__create');
const formElement = document.querySelector('.popup__content');
const nameInput = formElement.querySelector('.popup__text_profile_name');
const jobInput = formElement.querySelector('.popup__text_profile_job');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__text');
const popupAdd = document.querySelector('.profile__add');
const inputName = document.querySelector('.popup__text_add_name');
const inputLink = document.querySelector('.popup__text_add_link');
const popupAddClose = popupElementAdd.querySelector('.popup__close');
const formElementAdd = document.querySelector('.popup__content_add');
const templateElement = document.querySelector('#addtemplate').content.querySelector('.element');
const elements = document.querySelector('.elements');
const openPopup = (element) => {
  element.classList.add('popup_is-opened');
}
const closePopup = (element) => {
  element.classList.remove('popup_is-opened');
}

function editProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}
popupElementOpen.addEventListener('click', () => {
  openPopup(popupElement);
  editProfile();
})
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup(popupElement);
}
popupElementOpen.addEventListener('click', () => {
  openPopup(popupElement)
});
popupElementClose.addEventListener('click', () => {
  closePopup(popupElement)
});
formElement.addEventListener('submit', formSubmitHandler);



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
  const popupPreview = document.querySelector('.popup_preview');
  const popupImg = popupPreview.querySelector('.popup__img');
  const popupCloseImg = popupPreview.querySelector('.popup__close-preview');
  const popupImgCaption = popupPreview.querySelector('.popup__caption');
  elementLink.addEventListener('click', () => {
    popupCloseImg.addEventListener('click', () => { closePopup(popupPreview) });
    popupImg.src = item.link;
    popupImgCaption.textContent = item.name;
    openPopup(popupPreview);
  })

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
  const addElement = {
    name: inputName.value,
    link: inputLink.value
  };
  const newElement = createElement(addElement);
  elements.prepend(newElement);
  closePopup(popupElementAdd);
  popupElementAdd.reset();
}
popupAdd.addEventListener('click', () => { openPopup(popupElementAdd) });
popupElementCloseAdd.addEventListener('click', () => { closePopup(popupElementAdd) });
formElementAdd.addEventListener('submit', handleFormSubmit);



