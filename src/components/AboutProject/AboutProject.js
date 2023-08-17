import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="title-container">
        <h2 className="title-container__title">О проекте</h2>
      </div>
      <div className="about-project__articles">
        <article className="about-project__article">
          <h3 className="about-project__article-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__article-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="about-project__article">
          <h3 className="about-project__article-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__article-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline_first-time-period">
          <div className="about-project__timeline-title-container">
            <h3 className="about-project__timeline-title">1 неделя</h3>
          </div>
          <p className="about-project__timeline-description">Back-end</p>
        </div>
        <div className="about-project__timeline_second-time-period">
          <div className="about-project__timeline-title-container about-project__timeline-title-container_theme_dark">
            <h3 className="about-project__timeline-title">4 недели</h3>
          </div>
          <p className="about-project__timeline-description">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;