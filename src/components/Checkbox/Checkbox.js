import './Checkbox.css';

function Checkbox() {
  return (
    <div className="checkbox-wrapper">
      <label className="checkbox">
        <input type="checkbox" name="checkbox" className="checkbox_invisible" />
        <span className="checkbox_visible"></span>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default Checkbox;