import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
   open(name, link) {
    const imageElement = this._popup.querySelector('.popup__img')
    const captionElement = this._popup.querySelector('.popup__caption')

    imageElement.src = link;
    imageElement.alt = name;
    captionElement.textContent = name;

    super.open()
   }

}