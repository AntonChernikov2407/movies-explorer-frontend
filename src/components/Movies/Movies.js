import './Movies.css';
import Navigation from '../Navigation/Navigation.js';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import { useState } from 'react';

function Movies() {

  const isLoading = false;

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function openNavigation() {
    setIsNavigationOpen(true);
  }

  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  return (
    <>
      <Navigation isOpen={isNavigationOpen} onClose={closeNavigation} />
      <Header isOpen={isNavigationOpen} onOpen={openNavigation} onClose={closeNavigation} />
      <main className="movies">
        <SearchForm />
        {isLoading ? <Preloader /> : <MoviesCardList />}
      </main>
      <Footer />
    </>
  );
}

export default Movies;