import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return(
    <main className="auth">
      <div className="auth__content">
        <div className="auth__title-container">
          <Link to="/" className="link logo" />
          <h1 className="auth__greeting">Добро пожаловать!</h1>
        </div>
        <form className="auth-form">
          <fieldset className="auth-form__input-container">
            <label className="auth-form__label">Имя</label>
            <input className="auth-form__input" type="text" name="name" />
          </fieldset>
          <fieldset className="auth-form__input-container">
            <label className="auth-form__label">E-mail</label>
            <input className="auth-form__input" type="email" name="email" />
          </fieldset>
          <fieldset className="auth-form__input-container">
            <label className="auth-form__label">Пароль</label>
            <input className="auth-form__input" type="password" name="password" />
          </fieldset>
          <p className="auth-form__error-text">Что-то пошло не так...</p>
          <button className="button auth-form__submit-button">Зарегистрироваться</button>
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