import { Popup } from "./Popup";
export class PopupWithConfimation extends Popup{
  constructor(selectorPopup){
    super(selectorPopup);
    this._form = this._popup.querySelector('.popup__content');
    }
 

  setSubmit(action){
    this._handleSubmitCallback = action;
    console.log('this._handleSubmitCallback=>',this._handleSubmitCallback )
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleSubmitCallback();
      
    })
  }
}