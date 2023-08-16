import './SearchForm.css';
import Checkbox from '../Checkbox/Checkbox.js';

function SearchForm() {
  return (
    <section className="search-form">
      <label className="search-form__input-wrapper">
        <input
          className="search-form__input"
          type="text"
          name="search"
          placeholder="Фильм"
          required
        />
        <button className="button search-form__submit-button" type="submit" />
      </label>
      <Checkbox />
    </section>
  );
}

export default SearchForm;