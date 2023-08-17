import './MoviesCardList.css';
import moviesArray from '../../utils/moviesArray.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {

  const location = useLocation();

  return (
    <>
      <section className="movies-list">
        {moviesArray.map((card) => (
          <MoviesCard key={card.id} {...card} />
        ))}
      </section>
      <section className={`show-more ${location.pathname === "/saved-movies" ? "show-more_saved" : ""}`}>
        <button className="button show-more__button">Ещё</button>
      </section>
    </>
  );
}

export default MoviesCardList;