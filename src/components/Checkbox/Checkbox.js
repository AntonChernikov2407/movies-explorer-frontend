import './Checkbox.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Checkbox(props) {

  const location = useLocation();
  const checkLocation = location.pathname === '/movies' ? JSON.parse(localStorage.getItem('isChecked')) : false;
  const [isChecked, setIsChecked] = useState(checkLocation);

  function changeCheckboxState(evt) {
    const checkbox = evt.target;
    setIsChecked(checkbox.checked);
    props.onChange(checkbox.checked);
    localStorage.setItem('isChecked', JSON.stringify(checkbox.checked));
  }

  return (
    <div className="checkbox-wrapper">
      <label className="checkbox">
        <input type="checkbox" name="checkbox" className="checkbox_invisible" checked={isChecked} onChange={changeCheckboxState} />
        <span className="checkbox_visible"></span>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default Checkbox;