import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return(
    <main className="auth">
      <div className="auth__content">
        <div className="auth__title-container">
          <Link to="/" className="link logo" />
          <h1 className="auth__greeting">Рады видеть!</h1>
        </div>
        <form className="auth-form">
          <fieldset className="auth-form__input-container">
            <label className="auth-form__label">E-mail</label>
            <input
              className="auth-form__input"
              type="email"
              name="email"
              required
              placeholder="Введите ваш e-mail"
              minLength="2"
              maxLength="40"
            />
          </fieldset>
          <fieldset className="auth-form__input-container">
            <label className="auth-form__label">Пароль</label>
            <input
              className="auth-form__input"
              type="password"
              name="password"
              required
              placeholder="Введите ваш пароль"
              minLength="8"
              maxLength="20"
            />
          </fieldset>
          <p className="auth-form__error-text"></p>
          <button className="button auth-form__submit-button auth-form__submit-button_login">Войти</button>
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