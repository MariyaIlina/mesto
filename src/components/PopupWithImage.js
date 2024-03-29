import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
   constructor(selectorPopup){
      super(selectorPopup)
      this._imageElement = this._popup.querySelector('.popup__img')
      this._captionElement = this._popup.querySelector('.popup__caption')
   }
   open(name, link) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._captionElement.textContent = name;

    super.open()
   }

}