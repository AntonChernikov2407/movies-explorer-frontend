/* eslint-disable jsx-a11y/anchor-has-content */
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-wrapper">
          <h3 className="portfolio__link-name">Статичный сайт</h3>
          <a
            href="https://antonchernikov2407.github.io/how-to-learn"
            className="link portfolio__link"
            target="_blank"
            rel="noreferrer"
          />
        </li>
        <li className="portfolio__link-wrapper">
          <h3 className="portfolio__link-name">Адаптивный сайт</h3>
          <a
            href="https://antonchernikov2407.github.io/russian-travel"
            className="link portfolio__link"
            target="_blank"
            rel="noreferrer"
          />
        </li>
        <li className="portfolio__link-wrapper">
          <h3 className="portfolio__link-name">Одностраничное приложение</h3>
          <a
            href="https://antonchernikov2407.github.io/react-mesto-auth"
            className="link portfolio__link"
            target="_blank"
            rel="noreferrer"
          />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;