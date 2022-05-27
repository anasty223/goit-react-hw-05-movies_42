import { useEffect, useState } from "react";
import * as api from "../services/api";
import { NavLink, Link, useSearchParams } from "react-router-dom";

const BASE_URL = "https://image.tmdb.org/t/p/w500/";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchMouvie, setSearchMovie] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const handleSetFilms = (e) => {
    setSearchMovie(e.target.value.trim());
  };

  const handleSearchFilm = (e) => {
    e.preventDefault();

    const searchMouvieNorm = searchMouvie.toLowerCase().trim();

    if (!searchMouvieNorm) {
      alert("🦄Please enter the text!");
      return;
    }
    if (searchMouvieNorm) {
      setSearchParams({ query: searchMouvie });
    }
    setMovies([]);
    reset();
  };

  const reset = () => {
    setSearchMovie("");
  };
  let query = searchParams.get("query") ?? "";
  useEffect(() => {
    if (!query) {
      return;
    }
    api.searchFilms(query, page).then(({ results }) => {
      if (results.length === 0) {
        alert("ERROR");
      }
      return setMovies((prev) => [...prev, ...results]);
    });
  }, [page, query, searchParams]);

  return (
    <div>
      <form onSubmit={handleSearchFilm}>
        <h1>Enter a movie request</h1>
        <input
          onChange={handleSetFilms}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button>search</button>
      </form>

      {movies && (
        <ul>
          {movies.map((mouvie) => (
            <li key={mouvie.id}>{mouvie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MoviesPage;
