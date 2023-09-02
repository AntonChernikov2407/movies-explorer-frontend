import './SearchForm.css';
import Checkbox from '../Checkbox/Checkbox.js';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function SearchForm(props) {

  const location = useLocation();
  const checkLocation = location.pathname === '/movies' ? localStorage.getItem('value') : '';
  const [request, setRequest] = useState(checkLocation);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(request);
    location.pathname === '/movies' && localStorage.setItem('value', request);
  }

  function handleChange(evt) {
    const input = evt.target;
    setRequest(input.value);
    if (!input.validity.valid) {
      setError(true);
      setErrorText('Нужно ввести ключевое слово');
    } else {
      setError(false);
      setErrorText('');
    }
  }

  function changeCheckboxState(state) {
    props.onChange(state)
  }

  return (
    <form className="search-form" name="search-form" onSubmit={handleSubmit} noValidate>
      <label className="search-form__input-wrapper">
        <input
          className={`search-form__input ${error ? "form__input_type_error" : ""}`}
          type="text"
          name="search"
          placeholder="Фильм"
          required
          value={request || ''}
          onChange={handleChange}
        />
        <button className="button search-form__submit-button" type="submit" />
      </label>
      <p className={`form__input-error ${error ? "form__input-error_active" : ""}`}>{errorText}</p>
      <Checkbox onChange={changeCheckboxState} />
    </form>
  );
}

export default SearchForm;