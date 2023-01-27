export class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items,
      this._renderer = renderer,
      this._container = document.querySelector(selectorContainer)
  }

  renderCard = () => {
    this._items.forEach((data) => {
      this._renderer(data);
    })
  }

  addItem = (card) => {
    this._container.prepend(card)

  }
}