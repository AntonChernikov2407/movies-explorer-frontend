import './NotFound.css';
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return(
    <main className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <Link to="" className="link not-found__link" onClick={goBack}>Назад</Link>
    </main>
  )
}

export default NotFound;