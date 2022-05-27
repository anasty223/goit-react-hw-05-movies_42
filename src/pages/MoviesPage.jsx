import { useEffect, useState } from "react";
import * as api from "../services/api";
import { NavLink, Link, useSearchParams } from "react-router-dom";
import Form from "../components/form/Form";
import ImageGallery from "../components/ImageGallery/ImageGallery";

const BASE_URL = "https://image.tmdb.org/t/p/w500/";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchMouvie, setSearchMovie] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

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

  const handleSubmitForm = (searchQuery) => {
    setMovies([]);
    setPage(1);
    setSearchParams({ query: searchQuery });
  };

  return (
    <div>
      <Form onSubmit={handleSubmitForm} />
      <ImageGallery items={movies} />
    </div>
  );
};
export default MoviesPage;
