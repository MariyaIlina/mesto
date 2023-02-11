class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  getUserInfo = () => {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject())
      .catch(err => console.log(err))
  }

  getImages = () => {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject())
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
      .then(res => res.ok ? res.json() : Promise.reject())
      .catch(err => console.log(err))
  }

  deleteCard = (_id) => {
    return fetch(this._baseUrl + '/cards/'+ _id, {
      metod: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => console.log(err))
  };

  editProfile = (name, about) => {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    }).then(res => res.ok ? res.json() : Promise.reject())
      .catch(err => console.log(err))
  }

  putLike(_id) {
    return fetch(this._baseUrl + '/cards/likes/' + _id, {
      headers: this._headers,
      method: 'PUT',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch(err => console.log(err))
  }

  deleteLike(_id) {
    return fetch(this._baseUrl + '/cards/likes/' + _id, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => console.log(err))
  }

  editAvatar = (avatar) => {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    }).then(res => res.ok ? res.json() : Promise.reject())
      .catch(err => console.log(err))
  }

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '510ed949-2f9c-4a1e-b028-07a35bd485cd',
    'Content-Type': 'application/json'
  }
});


/////////////////////////////////////////////////
//  createCards = () => {
//   fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards', {
//     headers: {
//       authorization: '510ed949-2f9c-4a1e-b028-07a35bd485cd'
//     }
//   })
//   .then(res => {
//     if (res.ok) {
//       return res.json();
//     }

//     // если ошибка, отклоняем промис
//     return Promise.reject(`Ошибка: ${res.status}`);
//   });
//       console.log('getCards=>!!!',)
//   }





