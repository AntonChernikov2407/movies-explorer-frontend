import './Profile.css';
import Navigation from '../Navigation/Navigation.js';
import Header from '../Header/Header.js';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Profile(props) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <Navigation isOpen={props.isOpen} onClose={props.onClose} />
      <Header isOpen={props.isOpen} onOpen={props.onOpen} onClose={props.onClose} loggedIn={props.loggedIn} />
      <EditProfilePopup
        isOpen={props.isOpenPopup}
        onClose={props.onClosePopup}
        onSubmit={props.onSubmit}
        errorCode={props.errorCode}
      />
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
          <p className="profile__text">{props.text}</p>
          <div className="profile__buttons">
            <button className="button profile__button profile__button_edit-profile" onClick={props.onOpenPopup}>Редактировать</button>
            <button className="button profile__button profile__button_logout" onClick={props.onSignOut}>Выйти из аккаунта</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;