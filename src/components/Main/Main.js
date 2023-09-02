import './Main.css';
import Navigation from '../Navigation/Navigation.js';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';

function Main(props) {

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