import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

  const location = useLocation();
  const isSaved = true;

  function transformTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    function checkMinutes(min) {
      if (min === 0) {return ''}
      else if (min > 0 && min < 10) {return `0${min}м`}
      else return `${min}м`;
    }

    return `${hours > 0 ? `${hours}ч` : ''} ${checkMinutes(minutes)}`
  }

  return (
    <article className="movie">
      {isSaved 
        ? <button className={`button movie__button ${
            location.pathname === "/movies" ? "movie__button_saved" : "movie__button_remove"
          }`} />
        : <button className="button movie__save-button">Сохранить</button>
      }
      <img className="movie__image" src={props.image} alt={props.name} />
      <div className="movie__description">
        <p className="movie__name">{props.name}</p>
        <div className="movie__duration">{transformTime(props.duration)}</div>
      </div>
    </article>
  );
}

export default MoviesCard;