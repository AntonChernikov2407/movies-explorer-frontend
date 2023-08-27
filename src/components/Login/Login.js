import './Login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InputWithValidation from '../InputWithValidation/InputWithValidation.js';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password])

  useEffect(() => {
    setIsDisabled(true);
  }, [])

  function handleError(errCode) {
    if(errCode) {
      if (errCode === 400 || 401) return 'Вы ввели неправильный логин или пароль.';
      else return 'При авторизации произошла ошибка.';
    } else return '';
  }

  function handleInputChange({name, value}) {
    name === 'email' ? setEmail(value) : setPassword(value);
  }

  function setInputValidity({name, value}) {
    name === 'email' ? setEmailIsValid(value) : setPasswordIsValid(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(email, password)
  }

  return(
    <main className="auth">
      <div className="auth__content">
        <div className="auth__title-container">
          <Link to="/" className="link logo" />
          <h1 className="auth__greeting">Рады видеть!</h1>
        </div>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
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
              auth-form__submit-button_login
              ${isDisabled ? "button_inactive" : ""}
            `}
            disabled={isDisabled}
            type="submit"
          >
            Войти
          </button>
          <div className="auth-form__link-wrapper">
            <p className="auth-form__question">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="link auth-form__login-link">Регистрация</Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login;