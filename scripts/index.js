import initialCards from './data.js';
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddProfile = document.querySelector('.popup_add');
const popupCloseElement = popupEditProfile.querySelector('.popup__close');
const popupCloseAddElement = popupAddProfile.querySelector('.popup__close_add')
const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
const formEditProfileElement = document.querySelector('.popup__content');
const nameInputformEditProfile = formEditProfileElement.querySelector('.popup__text_profile_name');
const jobInputformEditProfile = formEditProfileElement.querySelector('.popup__text_profile_job');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const buttonOpenAddCardForm = document.querySelector('.profile__add');
const nameInputformAddProfile = document.querySelector('.popup__text_add_name');
const linkInputformAddProfile = document.querySelector('.popup__text_add_link');
const formAddProfileElement = document.querySelector('.popup__content_add');
const templateElement = document.querySelector('#template').content.querySelector('.element');
const elements = document.querySelector('.elements');
const popupPreview = document.querySelector('.popup_preview');
const popupImgPreview = popupPreview.querySelector('.popup__img');
const popupCloseImgPreview = popupPreview.querySelector('.popup__close-preview');
const popupImgCaptionPreview = popupPreview.querySelector('.popup__caption');

const openPopup = (element) => {
  element.classList.add('popup_is-opened');
  document.addEventListener('keyup', handleKeyUp);
  element.addEventListener('click', closeOverlayPopup);
}

const closePopup = (element) => {
  element.classList.remove('popup_is-opened');
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

const likeButtonClick = (e) => {
  e.target.classList.toggle('element__like_active')
}

const deleteButtonClick = (e) => {
  e.target.closest('.element').remove()
}

const renderInitialCards = (item, wrapElement) => {
  const element = createElementPopupAddProfile(item);
  wrapElement.append(element);
}
function fillInFormInputs() {
  nameInputformEditProfile.value = nameProfile.textContent;
  jobInputformEditProfile.value = infoProfile.textContent;
}

function submitHandlerEditProfileForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInputformEditProfile.value;
  infoProfile.textContent = jobInputformEditProfile.value;
  closePopup(popupEditProfile);
}

const submitAddCardForm = (e) => {
  e.preventDefault()
  const cardData = {
    name: nameInputformAddProfile.value,
    link: linkInputformAddProfile.value,
  }
  const newElement = createElementPopupAddProfile(cardData);
  elements.prepend(newElement);
  closePopup(popupAddProfile);
  formAddProfileElement.reset();
}

function createElementPopupAddProfile(item) {
  const template = templateElement.cloneNode(true);
  const likeButtonElement = template.querySelector('.element__like');
  const deleteButtonElement = template.querySelector('.element__delete');
  const titleTemplateElement = template.querySelector('.element__text');
  const imgTemplateElement = template.querySelector('.element__mask-group');
  titleTemplateElement.textContent = item.name;
  imgTemplateElement.src = item.link;
  imgTemplateElement.alt = item.name;
  likeButtonElement.addEventListener('click', likeButtonClick);
  deleteButtonElement.addEventListener('click', deleteButtonClick);
  imgTemplateElement.addEventListener('click', () => {
    popupImgPreview.src = item.link;
    popupImgPreview.alt = item.link;
    popupImgCaptionPreview.textContent = item.name;
    openPopup(popupPreview);
  })
  return template;
}

initialCards.forEach(function (item) {
  renderInitialCards(item, elements)
})

buttonOpenEditProfileForm.addEventListener('click', () => {
  openPopup(popupEditProfile);
  fillInFormInputs();
})

popupCloseElement.addEventListener('click', () => { closePopup(popupEditProfile) });
popupCloseImgPreview.addEventListener('click', () => { closePopup(popupPreview) });
buttonOpenAddCardForm.addEventListener('click', () => { openPopup(popupAddProfile) });
popupCloseAddElement.addEventListener('click', () => { closePopup(popupAddProfile) });
formAddProfileElement.addEventListener('submit', submitAddCardForm);
formEditProfileElement.addEventListener('submit', submitHandlerEditProfileForm);




