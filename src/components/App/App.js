import './App.css';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/NotFound.js';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute.js';
import * as Api from '../../utils/MainApi.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function App() {

  const token = localStorage.getItem('jwt');
  const navigate = useNavigate();
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [loginErrCode, setLoginErrCode] = useState('');
  const [registerErrCode, setRegisterErrCode] = useState('');
  const [profileErrCode, setProfileErrCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (token) {
      Api.getUserInfo(token)
        .then(info => setCurrentUser(info))
        .catch(err => console.log(err));
      navigate('/movies', {replace: true});
      setLoggedIn(true);
    }
    return;
  }, [loggedIn])

  function getSavedMovies() {
    setIsLoading(true);
    Api.getMovies(token)
      .then((data) => {
        if (data) {
          const movies = data.map((item) => {
            return {
              id: item._id,
              movieId: item.movieId,
              nameRU: item.nameRU,
              nameEN: item.nameEN,
              duration: item.duration,
              image: item.image,
              trailerLink: item.trailerLink,
              owner: item.owner,
              saved: true
            }
          })
          setSavedMovies(movies);
          setIsError(false);
        }
      })
      .catch(err => {
        console.log(err);
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }

  function handleUpdateUser(name, about) {
    Api.patchUserInfo(name, about, token)
      .then((info) => {
        setCurrentUser(info);
        closeEditProfilePopup();
        setProfileErrCode('');
        showResultText();
      })
      .catch(err => {
        console.log(err);
        setProfileErrCode(err);
      })
  }

  function showResultText() {
    setText('Данные успешно обновлены');
    setTimeout(() => setText(''), 2000);
  }

  function saveMovie(movie) {
    Api.postMovie(movie, token)
      .then((data) => {
        const newMovie = {
          id: data._id,
          movieId: data.movieId,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          duration: data.duration,
          image: data.image,
          trailerLink: data.trailerLink,
          owner: data.owner,
          saved: true
        }
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch(err => console.log(err));
  }

  function deleteMovie(movieId) {
    const id = savedMovies.find((movie) => movie.movieId === movieId)?.id || null;
    Api.deleteMovie(id, token)
      .then(() => {
        setSavedMovies((state) => state.filter((movie) => movie.id === id ? '' : movie));
      })
      .catch(err => console.log(err));
  }

  function onLogin(email, password) {
    Api.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          navigate('/movies', {replace: true});
          setLoginErrCode('');
        }
      })
      .catch(err => {
        console.log(err);
        setLoginErrCode(err);
      })
  }

  function onRegister(name, email, password) {
    Api.register(name, email, password)
      .then(() => {
        onLogin(email, password);
        setRegisterErrCode('');
      })
      .catch(err => {
        console.log(err);
        setRegisterErrCode(err);
      })
  }

  function onSignOut() {
    localStorage.removeItem('jwt');
    localStorage.setItem('first', JSON.stringify(true));
    localStorage.setItem('value', '');
    localStorage.setItem('isChecked', JSON.stringify(false));
    localStorage.setItem('movies', JSON.stringify([]));
    navigate('/', {replace: true});
    setLoggedIn(false);
  }

  function openNavigation() {
    setIsNavigationOpen(true);
  }

  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  function openEditProfilePopup() {
    setIsEditProfilePopupOpen(true);
  }

  function closeEditProfilePopup() {
    setIsEditProfilePopupOpen(false);
    setProfileErrCode('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main
            loggedIn={loggedIn}
            isOpen={isNavigationOpen}
            onOpen={openNavigation}
            onClose={closeNavigation}
          />} />
          <Route path="/movies" element={<ProtectedRouteElement
            element={Movies}
            onSave={saveMovie}
            loggedIn={loggedIn}
            onDelete={deleteMovie}
            savedMovies={savedMovies}
            isOpen={isNavigationOpen}
            onOpen={openNavigation}
            onClose={closeNavigation}
          />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement
            element={SavedMovies}
            savedMovies={savedMovies}
            loggedIn={loggedIn}
            onDelete={deleteMovie}
            isOpen={isNavigationOpen}
            onOpen={openNavigation}
            onClose={closeNavigation}
            getSavedMovies={getSavedMovies}
            isLoading={isLoading}
            isError={isError}
          />} />
          <Route path="/profile" element={<ProtectedRouteElement
            element={Profile}
            onSignOut={onSignOut}
            loggedIn={loggedIn}
            onSubmit={handleUpdateUser}
            isOpen={isNavigationOpen}
            onOpen={openNavigation}
            onClose={closeNavigation}
            isOpenPopup={isEditProfilePopupOpen}
            onOpenPopup={openEditProfilePopup}
            onClosePopup={closeEditProfilePopup}
            errorCode={profileErrCode}
            text={text}
          />} />
          <Route path="/signup" element={<Register onRegister={onRegister} errorCode={registerErrCode} />} />
          <Route path="/signin" element={<Login onLogin={onLogin} errorCode={loginErrCode} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
