import './Navigation.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Navigation(props) {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isOpen) {
      const close = (evt) => {
        if (evt.key === 'Escape') {
          props.onClose();
        }
      }
      window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    } return;
  }, [props.isOpen])

  function replaceToProfile() {
    navigate('/profile', {replace: true});
    props.onClose();
  }

  function handleClose() {
    props.onClose();
  }

  return (
    <nav className={`navigation ${props.isOpen ? "navigation_opened" : ""}`}>
      <div className={`navigation__overlay ${props.isOpen ? "navigation__overlay_opened" : ""}`} onClick={handleClose} />
      <div className={`navigation__content ${props.isOpen ? "navigation__content_opened" : ""}`}>
        <button className="button navigation__close-button" onClick={handleClose} />
        <ul className="navigation__links">
          <li 
            className={`navigation__link-wrapper ${
              location.pathname === "/" ? "navigation__link-wrapper_active" : ""
            }`}
          >
            <Link to="/" className="link navigation__link" onClick={handleClose}>Главная</Link>
          </li>
          <li 
            className={`navigation__link-wrapper ${
              location.pathname === "/movies" ? "navigation__link-wrapper_active" : ""
            }`}
          >
            <Link to="/movies" className="link navigation__link" onClick={handleClose}>Фильмы</Link>
          </li>
          <li 
            className={`navigation__link-wrapper ${
              location.pathname === "/saved-movies" ? "navigation__link-wrapper_active" : ""
            }`}
          >
            <Link to="/saved-movies" className="link navigation__link" onClick={handleClose}>Сохранённые фильмы</Link>
          </li>
        </ul>
        <button className="button navigation__profile-button" onClick={replaceToProfile}>Аккаунт</button>
      </div>
    </nav>
  )
}

export default Navigation;