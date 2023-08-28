import './Register.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InputWithValidation from '../InputWithValidation/InputWithValidation.js';

function Register(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false)
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (nameIsValid && emailIsValid && passwordIsValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, password])

  useEffect(() => {
    setIsDisabled(true);
  }, [])

  function handleError(errCode) {
    if(errCode) {
      if (errCode === 409) return 'Пользователь с таким email уже существует.';
      else return 'При регистрации пользователя произошла ошибка.';
    } else return '';
  }

  function handleInputChange({name, value}) {
    if (name === 'name') setName(value)
    else if (name === 'email') setEmail(value)
    else setPassword(value)
  }

  function setInputValidity({name, value}) {
    if (name === 'name') setNameIsValid(value)
    else if (name === 'email') setEmailIsValid(value)
    else setPasswordIsValid(value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(name, email, password);
    setIsDisabled(true);
  }

  return(
    <main className="auth">
      <div className="auth__content">
        <div className="auth__title-container">
          <Link to="/" className="link logo" />
          <h1 className="auth__greeting">Добро пожаловать!</h1>
        </div>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <fieldset className="auth-form__input-container">
            <label className="auth-form__label">Имя</label>
            <InputWithValidation
              className="auth-form__input"
              type="text"
              name="name"
              required
              placeholder="Введите вашe имя"
              minLength="2"
              maxLength="40"
              value={name || ""}
              onChange={handleInputChange}
              setInputValidity={setInputValidity}
            />
          </fieldset>
          <fieldset className="auth-form__input-container">
            <label className="auth-form__label">E-mail</label>
            <InputWithValidation
              className="auth-form__input"
              type="email"
              name="email"
              required
              placeholder="Введите ваш e-mail"
              minLength="2"
              maxLength="40"
              value={email || ""}
              onChange={handleInputChange}
              setInputValidity={setInputValidity}
            />
          </fieldset>
          <fieldset className="auth-form__input-container">
            <label className="auth-form__label">Пароль</label>
            <InputWithValidation
              className="auth-form__input"
              type="password"
              name="password"
              required
              placeholder="Введите ваш пароль"
              minLength="8"
              maxLength="20"
              value={password || ""}
              onChange={handleInputChange}
              setInputValidity={setInputValidity}
            />
          </fieldset>
          <p className="auth-form__error-text">{handleError(props.errorCode)}</p>
          <button
            className={`
              button
              auth-form__submit-button
              ${isDisabled ? "button_inactive" : ""}
            `}
            disabled={isDisabled}
            type="submit"
          >
            Зарегистрироваться
          </button>
          <div className="auth-form__link-wrapper">
            <p className="auth-form__question">Уже зарегистрированы?</p>
            <Link to="/signin" className="link auth-form__login-link">Войти</Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register;