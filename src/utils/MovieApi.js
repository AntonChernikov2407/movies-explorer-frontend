export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const getResponseData = (res) => { // Проверяет данные ответа
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
}

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(res => getResponseData(res));
};