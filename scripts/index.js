import initialCards from './data.js';
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddProfile = document.querySelector('.popup_add');
const popupCloseElement = popupEditProfile.querySelector('.popup__close');
const popupCloseAddElement = popupAddProfile.querySelector('.popup__close_add')
const popupSaveElement = popupEditProfile.querySelector('.popup__save');
const editProfileElement = document.querySelector('.profile__edit');
const popupCreateElement = popupEditProfile.querySelector('.popup__create');
const formEditProfileElement = document.querySelector('.popup__content');
const nameInputformEditProfile = formEditProfileElement.querySelector('.popup__text_profile_name');
const jobInputformEditProfile = formEditProfileElement.querySelector('.popup__text_profile_job');
const nameProfile = document.querySelector('.profile__name');
const infoProfile = document.querySelector('.profile__text');
const addProfileElement = document.querySelector('.profile__add');
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
}
const closePopup = (element) => {
  element.classList.remove('popup_is-opened');
}

function editProfile() {
  nameInputformEditProfile.value = nameProfile.textContent;
  jobInputformEditProfile.value = infoProfile.textContent;
}
editProfileElement.addEventListener('click', () => {
  openPopup(popupEditProfile);
  editProfile();
})
function submitHandlerEditProfileForm(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInputformEditProfile.value;
  infoProfile.textContent = jobInputformEditProfile.value;
  closePopup(popupEditProfile);
}
editProfileElement.addEventListener('click', () => {
  openPopup(popupEditProfile)
});
popupCloseElement.addEventListener('click', () => {
  closePopup(popupEditProfile)
});
formEditProfileElement.addEventListener('submit', submitHandlerEditProfileForm);

function createElementPopupAddProfile(item) {
  const template = templateElement.cloneNode(true);
  const likeButtonElement = template.querySelector('.element__like');
  const deleteButtonElement = template.querySelector('.element__delete');
  const titleTemplateElement = template.querySelector('.element__text');
  likeButtonElement.addEventListener('click', likeButtonClick);
  deleteButtonElement.addEventListener('click', deleteButtonClick);
  titleTemplateElement.textContent = item.name;
  const imgTemplateElement = template.querySelector('.element__mask-group');
  imgTemplateElement.src = item.link;
  imgTemplateElement.alt = item.name;
  imgTemplateElement.addEventListener('click', () => {
    popupImgPreview.src = item.link;
    popupImgPreview.alt = item.link;
    popupImgCaptionPreview.textContent = item.name;
    openPopup(popupPreview);
  })
  return template;
}

popupCloseImgPreview.addEventListener('click', () => { closePopup(popupPreview) });
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

initialCards.forEach(function (item) {
  renderInitialCards(item, elements)
})
const handleFormSubmit = (e) => {
  e.preventDefault()
  const addElement = {
    name: nameInputformAddProfile.value,
    link: linkInputformAddProfile.value,
  }
  const newElement = createElementPopupAddProfile(addElement);
  elements.prepend(newElement);
  closePopup(popupAddProfile);
  formAddProfileElement.reset();
}
addProfileElement.addEventListener('click', () => { openPopup(popupAddProfile) });
popupCloseAddElement.addEventListener('click', () => { closePopup(popupAddProfile) });
formAddProfileElement.addEventListener('submit', handleFormSubmit);



