export class Section {
  constructor({renderer }, selectorContainer) {
      this._renderer = renderer,
      this._container = document.querySelector(selectorContainer)
  }

  renderCard = (items) => {
    items.forEach((data) => {
      this._renderer(data);
    })
  }

  addItem = (card) => {
       this._container.prepend(card)
  }
}