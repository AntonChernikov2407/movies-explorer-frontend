import './EditProfilePopup.css';
import { useState } from 'react';

function EditProfilePopup({ isOpen, onClose }) {

  const currentUser = {
    name: 'Виталий',
    email: 'pochta@yandex.ru'
  }

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  function handleInputChange(evt) {
    const input = evt.target;
    input.name === 'name' ? setName(input.value) : setEmail(input.value);
  }

  return(
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__overlay" onClick={onClose} />
      <div className="popup__container">
        <button className="button popup__close-button" onClick={onClose} />
        <form className="edit-form">
          <h2 className="edit-form__title">Редактировать профиль</h2>
          <fieldset className="edit-form__input-container">
            <input
              className="edit-form__input"
              type="text" name="name"
              placeholder="Имя"
              value={name || ""}
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset className="edit-form__input-container">
            <input
              className="edit-form__input"
              type="email"
              name="email"
              placeholder="E-mail"
              value={email || ""}
              onChange={handleInputChange}
            />
          </fieldset>
          <button className="button edit-form__submit-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default EditProfilePopup;