import './AboutMe.css';
import photo from '../../images/photo.png';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="title-container">
        <h2 className="title-container__title">Студент</h2>
      </div>
      <div className="about-me__container">
        <div className="about-me__info-wrapper">
          <article className="about-me__info">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </article>
          <a href="https://github.com/AntonChernikov2407" className="link about-me__github-link" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="about-me__photo" src={photo} alt="фотография" />
      </div>
    </section>
  );
}

export default AboutMe;