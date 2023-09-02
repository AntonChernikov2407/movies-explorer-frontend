import './SavedMovies.css';
import Navigation from '../Navigation/Navigation.js';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import FilterMovies from '../../utils/FilterMovies.js';
import { useState, useEffect } from 'react';

function SavedMovies(props) {

  const [noMatch, setNoMatch] =useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [request, setRequest] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isFirstMount, setIsFirstMount] = useState(JSON.parse(localStorage.getItem('firstMount')))
  const savedMovies = props.savedMovies;

  useEffect(() => {
    if (isFirstMount) {
      props.getSavedMovies();
      setIsFirstMount(false);
      localStorage.setItem('firstMount', JSON.stringify(false));
    } 
    return;
  }, []);

  useEffect(() => {
    const filtered = FilterMovies(savedMovies, isChecked, request);
    if (filtered.length > 0) {
      setNoMatch(false);
      setFilteredMovies(filtered);
    } else setNoMatch(true);
  }, [isChecked, request, savedMovies])

  function changeCheckboxState(state) {
    setIsChecked(state)
  }

  function handleSubmit(value) {
    setRequest(value.toLowerCase());
  }

  function returnContent() {
    if (props.isLoading) return(<Preloader />)
    else if (noMatch) {
      return(
        <div className="no-match">
          <p className="no-match__text">
            {!props.isError ? "Ничего не найдено" : "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."}
          </p>
        </div>
      )
    }
    else return(<MoviesCardList 
        moviesArray={filteredMovies} 
        request={request} 
        onDelete={props.onDelete}
        width={props.width}
      />)
  }

  return (
    <>
      <Navigation isOpen={props.isOpen} onClose={props.onClose} />
      <Header
        isOpen={props.isOpen}
        onOpen={props.onOpen}
        onClose={props.onClose}
        loggedIn={props.loggedIn}
        width={props.width}
      />
      <main className="saved-movies">
        <SearchForm onSubmit={handleSubmit} onChange={changeCheckboxState} />
        {returnContent()}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;