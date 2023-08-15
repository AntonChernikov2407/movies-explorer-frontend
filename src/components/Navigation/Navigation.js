import './Navigation.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navigation(props) {

  const location = useLocation();
  const navigate = useNavigate();

  function replaceToProfile() {
    navigate('/profile', {replace: true});
  }

  return (
    <nav className={`navigation ${props.isOpen ? "navigation_opened" : ""}`}>
      <div className={`navigation__overlay ${props.isOpen ? "navigation__overlay_opened" : ""}`} onClick={props.onClose} />
      <div className={`navigation__content ${props.isOpen ? "navigation__content_opened" : ""}`}>
        <button className="button navigation__close-button" onClick={props.onClose} />
        <ul className="navigation__links">
          <li 
            className={`navigation__link-wrapper ${
              location.pathname === "/" ? "navigation__link-wrapper_active" : ""
            }`}
          >
            <Link to="/" className="link navigation__link">Главная</Link>
          </li>
          <li 
            className={`navigation__link-wrapper ${
              location.pathname === "/movies" ? "navigation__link-wrapper_active" : ""
            }`}
          >
            <Link to="/movies" className="link navigation__link">Фильмы</Link>
          </li>
          <li 
            className={`navigation__link-wrapper ${
              location.pathname === "/saved-movies" ? "navigation__link-wrapper_active" : ""
            }`}
          >
            <Link to="/saved-movies" className="link navigation__link">Сохранённые фильмы</Link>
          </li>
        </ul>
        <button className="button navigation__profile-button" onClick={replaceToProfile}>Аккаунт</button>
      </div>
    </nav>
  )
}

export default Navigation;