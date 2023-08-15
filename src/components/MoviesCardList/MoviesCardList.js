import './MoviesCardList.css';
import moviesArray from '../../utils/moviesArray.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
  return (
    <>
      <section className="movies-list">
        {moviesArray.map((card) => (
          <MoviesCard key={card.id} {...card} />
        ))}
      </section>
      <section className="show-more">
        <button className="button show-more__button">Ещё</button>
      </section>
    </>
  );
}

export default MoviesCardList;