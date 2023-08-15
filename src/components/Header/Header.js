import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header(props) {

  const location = useLocation();
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const loggedIn = true; // Менять состояние для демострации

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    if (width >= 1024) {props.onClose()};
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])

  function replaceToProfile() {
    navigate('/profile', {replace: true});
  }

  function replaceToLogin() {
    navigate('/signin', {replace: true});
  }

  function checkWidth() {
    if (width < 1024) {
      return(
        <button className="button header__nav-open-button" onClick={props.onOpen} />
      )
    } else {
      return(
        <>
          <nav className="header__links">
            <Link to="/movies" className={`link header__nav-link ${
                location.pathname === "/movies" ? "header__nav-link_active" : ""
              }`}>Фильмы</Link>
            <Link to="/saved-movies" className={`link header__nav-link ${
                location.pathname === "/saved-movies" ? "header__nav-link_active" : ""
              }`}>Сохранённые фильмы</Link>
          </nav>
          <button className="button header__profile-button" onClick={replaceToProfile}>Аккаунт</button>
        </>
      )
    }
  }
  
  function returnMark() {
    return(
      <nav className="header__links">
        <Link to="/signup" className="link header__link" >Регистрация</Link>
        <button className="button header__login-button" onClick={replaceToLogin}>Войти</button>
      </nav>
    )
  }

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/" className="link logo" />
      </div>
      {loggedIn ? checkWidth() : returnMark()}
    </header>
  );
}

export default Header;