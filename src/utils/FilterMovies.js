function FilterMovies(movies, isChecked, request) {
  return movies.filter((movie) => {
    if (isChecked && movie.duration > 40) return false;
    else if (request && 
        !(movie.nameRU.toLowerCase().includes(request)
        || movie.nameEN.toLowerCase().includes(request))
      ) return false;
    else return true;
  });
}

export default FilterMovies;