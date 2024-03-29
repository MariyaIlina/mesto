class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }

  }
  getUserInfo = () => {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  getImages = () => {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  addCard = (name, link) => {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
      headers: this._headers,

      body: JSON.stringify({
        name,
        link
      })
    }
    )
      .then(this._checkResponse)
  }

  deleteCard = (_id) => {
    return fetch(this._baseUrl + '/cards/' + _id, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(this._checkResponse)
  }

  editProfile = (name, about) => {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(this._checkResponse)
  }

  putLike(_id) {
    return fetch(this._baseUrl + '/cards/likes/' + _id, {
      headers: this._headers,
      method: 'PUT',
    })
      .then(this._checkResponse)
  }

  deleteLike(_id) {
    return fetch(this._baseUrl + '/cards/likes/' + _id, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(this._checkResponse)
  }

  editAvatar = (avatar) => {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      })
    })
      .then(this._checkResponse)
  }

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '510ed949-2f9c-4a1e-b028-07a35bd485cd',
    'Content-Type': 'application/json'
  }
});





