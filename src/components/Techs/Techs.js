import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="title-container">
        <h2 className="title-container__title">Технологии</h2>
      </div>
      <article className="techs__article">
        <h3 className="techs__article-title">7 технологий</h3>
        <p className="techs__article-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </article>
      <ul className="techs__list">
        <li className="techs__technic">
          <p className="techs__technic-name">HTML</p>
        </li>
        <li className="techs__technic">
          <p className="techs__technic-name">CSS</p>
        </li>
        <li className="techs__technic">
          <p className="techs__technic-name">JS</p>
        </li>
        <li className="techs__technic">
          <p className="techs__technic-name">React</p>
        </li>
        <li className="techs__technic">
          <p className="techs__technic-name">Git</p>
        </li>
        <li className="techs__technic">
          <p className="techs__technic-name">Express.js</p>
        </li>
        <li className="techs__technic">
          <p className="techs__technic-name">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;