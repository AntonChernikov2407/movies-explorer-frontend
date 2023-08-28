import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <a className="link navtab__link" href="#about-project">
        <p className="navtab__link-text" >О проекте</p>
      </a>
      <a className="link navtab__link" href="#techs">
        <p className="navtab__link-text" >Технологии</p>
      </a>
      <a className="link navtab__link" href="#about-me">
        <p className="navtab__link-text" >Студент</p>
      </a> 
    </nav>
  );
} 

export default NavTab;