import './Profile.css';
import Navigation from '../Navigation/Navigation.js';
import Header from '../Header/Header.js';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import { useState } from 'react';

function Profile() {

  const currentUser = {
    name: 'Виталий',
    email: 'pochta@yandex.ru'
  }

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

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
  }

  return (
    <>
      <Navigation isOpen={isNavigationOpen} onClose={closeNavigation} />
      <Header isOpen={isNavigationOpen} onOpen={openNavigation} onClose={closeNavigation} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeEditProfilePopup} />
      <main className="profile">
        <div className="profile__content-wrapper">
          <div className="profile__main-content">
            <h1 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h1>
            <div className="profile__info-container">
              <div className="profile__info">
                <h2 className="profile__info-title">Имя</h2>
                <p className="profile__info-text">{currentUser.name}</p>
              </div>
              <div className="profile__info">
                <h2 className="profile__info-title">E-mail</h2>
                <p className="profile__info-text">{currentUser.email}</p>
              </div>
            </div>
          </div>
          <div className="profile__buttons">
            <button className="button profile__button profile__button_edit-profile" onClick={openEditProfilePopup}>Редактировать</button>
            <button className="button profile__button profile__button_logout">Выйти из аккаунта</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;