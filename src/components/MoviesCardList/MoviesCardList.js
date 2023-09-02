import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';

const MoviesCardList = memo((props) => {

  const location = useLocation();
  const width = props.width;
  const initMovies = () => {
    if (width >= 1024) return 12;
    else if (width < 1024 && width >= 768) return 8;
    else return 5;
  }
  const countMovies = width < 1024 ? 2 : 3;
  const [visibleMovies, setVisibleMovies] = useState(initMovies());
  const moviesArray = props.moviesArray;
  const request = props.request;

  useEffect(() => {
    visibleMovies < initMovies() && setVisibleMovies(initMovies());
  }, [width])

  useEffect(() => {
    setVisibleMovies(initMovies());
  }, [request])

  function handleButtonClick() {
    setVisibleMovies(visibleMovies + countMovies);
  }

  return (
    location.pathname === "/movies" 
      ? (
        <>
          <section className="movies-list">
            {moviesArray.slice(0, visibleMovies).map((movie) => {
              return(<MoviesCard key={movie.movieId} {...movie} onSave={props.onSave} onDelete={props.onDelete} />)
            })}
          </section>
          <section className={
            `show-more 
            ${moviesArray.length > visibleMovies ? "show-more_visible" : ""}`
          }>
            <button className="button show-more__button" onClick={handleButtonClick}>Ещё</button>
          </section>
        </>
      )
    : (
      <section className="movies-list movie-list_saved">
        {moviesArray.map((movie) => {
          return(<MoviesCard key={movie.movieId} {...movie} onDelete={props.onDelete} />)
        })}
      </section>
    )
      

  );
})

export default MoviesCardList;