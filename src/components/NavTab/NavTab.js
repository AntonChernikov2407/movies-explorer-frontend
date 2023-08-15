import './NavTab.css';

function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__link-container">
        <a href="#about-project" className="link navtab__link" >О проекте</a>
      </li>
      <li className="navtab__link-container">
        <a href="#techs" className="link navtab__link" >Технологии</a>
      </li>
      <li className="navtab__link-container">
        <a href="#about-me" className="link navtab__link" >Студент</a>
      </li> 
    </ul>
  );
}

export default NavTab;