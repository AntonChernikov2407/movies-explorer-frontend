import './Movies.css';
import Navigation from '../Navigation/Navigation.js';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import FilterMovies from '../../utils/FilterMovies.js';
import * as MovieApi from '../../utils/MovieApi.js';
import * as Api from '../../utils/MainApi.js';
import { useState, useEffect } from 'react';

function Movies(props) {

  const [moviesData, setMoviesData] = useState(JSON.parse(localStorage.getItem('movies')));
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noMatch, setNoMatch] =useState(false);
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('isChecked')));
  const [request, setRequest] = useState(localStorage.getItem('value'));
  const [isFirstRequest, setIsFirstRequest] = useState(JSON.parse(localStorage.getItem('first')));
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setIsLoading(true);
    Api.getMovies(token)
      .then((data) => {
        const result = moviesData.map((movie) => ({
          ...movie,
          saved: data.some((m) => m.movieId === movie.movieId)
        }));
        setMovies(result);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [moviesData])

  function getAllMovies() {
    if (isFirstRequest) {
      setIsLoading(true);
      MovieApi.getMovies()
        .then((data) => {
          const movies = data.map((item) => {
            return {
              nameRU: item.nameRU,
              nameEN: item.nameEN,
              country: item.country,
              director: item.director,
              duration: item.duration,
              year: item.year,
              description: item.description,
              image: `https://api.nomoreparties.co/${item.image.url}`,
              trailerLink: item.trailerLink,
              movieId: item.id,
              saved: false,
            }
          })
          setIsError(false);
          setIsFirstRequest(false);
          setMoviesData(movies)
          localStorage.setItem('movies', JSON.stringify(movies));
          localStorage.setItem('first', JSON.stringify(false));
        })
        .catch(err => {
          setIsError(true);
          setIsFirstRequest(true);
          console.log(err.message)
        })
        .finally(() => setIsLoading(false));
      
    } else return;
  }

  useEffect(() => {
    if (request) {
      const filtered = FilterMovies(movies, isChecked, request.toLowerCase());
      if (filtered.length > 0) {
        setNoMatch(false);
        setFilteredMovies(filtered);
      } else setNoMatch(true);
    } else return;
  }, [isChecked, request, movies])

  function changeCheckboxState(state) {
    setIsChecked(state)
  }

  function handleSubmit(value) {
    getAllMovies()
    setRequest(value.toLowerCase());
  }

  function returnContent() {
    if (isLoading) return(<Preloader />)
    else if (noMatch) {
      return(
        <div className="no-match">
          <p className="no-match__text">
            {!isError ? "Ничего не найдено" : "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."}
          </p>
        </div>
      )
    }
    else return(<MoviesCardList 
        moviesArray={filteredMovies} 
        request={request} 
        onSave={props.onSave}
        onDelete={props.onDelete}
      />)
  }

  return (
    <>
      <Navigation isOpen={props.isOpen} onClose={props.onClose} />
      <Header isOpen={props.isOpen} onOpen={props.onOpen} onClose={props.onClose} loggedIn={props.loggedIn} />
      <main className="movies">
        <SearchForm onSubmit={handleSubmit} onChange={changeCheckboxState} />
        {returnContent()}
      </main>
      <Footer />
    </>
  );
}

export default Movies;