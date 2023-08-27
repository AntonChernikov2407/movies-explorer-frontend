import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { memo, useState } from 'react';

const MoviesCard = memo(({
  onDelete,
  onSave,
  nameRU,
  nameEN,
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  movieId,
  saved
}) => {

  const location = useLocation();
  const [isSaved, setIsSaved] = useState(saved);

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

  function handleSave() {
    setIsSaved(true);
    onSave({
      nameRU,
      nameEN,
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      movieId,
    });
  }

  function handleDelete() {
    setIsSaved(false);
    onDelete(movieId);
  }

  function returnButton() {
    if (location.pathname === "/movies") {
      return isSaved 
        ? (<button className="button movie__button movie__button_saved" onClick={handleDelete} />)
        : (<button className="button movie__save-button" onClick={handleSave}>Сохранить</button>)
    } else {
      return(<button className="button movie__button movie__button_remove" onClick={handleDelete} />)
    }
  }

  return (
    <article className="movie">
      {returnButton()}
      <a className="movie__trailer-link" href={trailerLink} target="_blank" rel="noreferrer">
        <img className="movie__image" src={image} alt={nameRU} />
      </a>
      <div className="movie__description">
        <p className="movie__name">{nameRU}</p>
        <div className="movie__duration">{transformTime(duration)}</div>
      </div>
    </article>
  );
})

export default MoviesCard;