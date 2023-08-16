/* eslint-disable jsx-a11y/anchor-has-content */
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__links">
        <a 
          href="https://antonchernikov2407.github.io/how-to-learn"
          className="link portfolio__link"
          target="_blank"
          rel="noreferrer">
            <h3 className="portfolio__link-name">Статичный сайт</h3>
            <div className="portfolio__link-logo" />
        </a>
        <a
          href="https://antonchernikov2407.github.io/russian-travel"
          className="link portfolio__link"
          target="_blank"
          rel="noreferrer">
            <h3 className="portfolio__link-name">Адаптивный сайт</h3>
          <div className="link portfolio__link-logo" />
        </a>
        <a          
          href="https://antonchernikov2407.github.io/react-mesto-auth"
          className="link portfolio__link"
          target="_blank"
          rel="noreferrer">
            <h3 className="portfolio__link-name">Одностраничное приложение</h3>
          <div className="link portfolio__link-logo" />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;