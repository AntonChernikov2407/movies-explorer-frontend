export const BASE_URL = 'https://api.movie-explorer.nomoreparties.sbs';

export const getResponseData = (res) => { // Проверяет данные ответа
  if (!res.ok) {
    return Promise.reject(res.status); 
  }
  return res.json();
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, email, password})
  })
  .then(res => getResponseData(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(res => getResponseData(res));
};

export const getUserInfo = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    }
  })
  .then(res => getResponseData(res))
}

export const patchUserInfo = (name, email, jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({name, email})
  })
  .then(res => getResponseData(res))
}

export const getMovies = (jwt) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })
  .then(res => getResponseData(res));
}

export const postMovie = (movie, jwt) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify(movie),
  })
  .then(res => getResponseData(res));
}

export const deleteMovie = (movieId, jwt) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${jwt}`
    },
  })
  .then(res => getResponseData(res));
}