import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title-container">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      </div>
      <div className="footer__info">
        <p className="footer__year">&copy; 2023</p>
        <nav className="footer__links">
          <a href="https://practicum.yandex.ru" className="link footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com" className="link footer__link" target="_blank" rel="noreferrer">Github</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;