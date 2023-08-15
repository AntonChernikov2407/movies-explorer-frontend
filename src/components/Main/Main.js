import './Main.css';
import Navigation from '../Navigation/Navigation.js';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';
import { useState } from 'react';

function Main() {

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
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;