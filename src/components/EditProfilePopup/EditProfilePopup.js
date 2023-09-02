import './EditProfilePopup.css';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import InputWithValidation from '../InputWithValidation/InputWithValidation.js';

function EditProfilePopup({ isOpen, onClose, onSubmit, errorCode }) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [nameIsValid, setNameIsValid] = useState(true)
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (emailIsValid && nameIsValid && (name !== currentUser.name || email !== currentUser.email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, name])

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setIsDisabled(true);
  }, [currentUser, isOpen]);

  useEffect(() => {
    if (isOpen) {
      const close = (evt) => {
        if (evt.key === 'Escape') {
          onClose();
        }
      }
      window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    } return;
  }, [isOpen])

  function handleInputChange({name, value}) {
    name === 'name' ? setName(value) : setEmail(value);
  }

  function setInputValidity({name, value}) {
    name === 'name' ? setNameIsValid(value) : setEmailIsValid(value);
  }

  function handleError(errCode) {
    if(errCode) {
      if (errCode === 409) return 'Пользователь с таким email уже существует.';
      else return 'При обновлении профиля произошла ошибка.';
    } else return '';
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(name, email);
    setIsDisabled(true);
  }

  return(
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__overlay" onClick={onClose} />
      <div className="popup__container">
        <button className="button popup__close-button" onClick={onClose} />
        <form className="edit-form" onSubmit={handleSubmit} noValidate>
          <h2 className="edit-form__title">Редактировать профиль</h2>
          <fieldset className="edit-form__input-container">
            <InputWithValidation
              className="edit-form__input"
              type="text"
              name="name"
              placeholder="Имя"
              value={name || ""}
              onChange={handleInputChange}
              minLength="2"
              maxLength="40"
              setInputValidity={setInputValidity}
              isOpen={isOpen}
            />
          </fieldset>
          <fieldset className="edit-form__input-container">
            <InputWithValidation
              className="edit-form__input"
              type="email"
              name="email"
              placeholder="E-mail"
              value={email || ""}
              onChange={handleInputChange}
              minLength="2"
              maxLength="40"
              setInputValidity={setInputValidity}
              isOpen={isOpen}
            />
          </fieldset>
          <p className="edit-form__error-text">{handleError(errorCode)}</p>
          <button
            className={`
              button
              ${isDisabled ? "button_inactive" : ""}
              edit-form__submit-button
            `}
            disabled={isDisabled}
            type="submit"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfilePopup; 