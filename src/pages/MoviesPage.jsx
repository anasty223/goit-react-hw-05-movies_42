import { useEffect, useState } from "react";
import * as api from "../services/api";
import { useSearchParams } from "react-router-dom";
import Form from "../components/form/Form";
import ImageGallery from "../components/ImageGallery/ImageGallery";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      return;
    }
    api.searchFilms(query, page).then(({ results }) => {
      console.log("results", results);
      if (results.length === 0) {
        alert("ERROR");
      }

      setMovies(results);
    });
  }, [page, query]);

  const handleSubmitForm = (searchQuery) => {
    setMovies([]);
    setSearchParams({ query: searchQuery });
    setPage(1);
  };
  const loadMore = () => {
    setPage(page + 1);
  };
  const btn = movies.length >= 20;
  return (
    <div>
      <Form onSubmit={handleSubmitForm} />
      <ImageGallery items={movies} />
      {btn && (
        <button type="submit" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};
export default MoviesPage;
