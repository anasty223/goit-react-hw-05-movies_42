import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as api from "../services/api";
import { useSearchParams } from "react-router-dom";
import Form from "../components/form/Form";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import { ButtonMouviesPage } from "../styles/MoviesPage.styles";

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
      // console.log("results", results);
      if (results.length === 0) {
        toast.error(`Not found ${query}`);
      }

      setMovies((prev) => [...prev, ...results]);
    });
  }, [page, query]);

  const handleSubmitForm = (searchQuery) => {
    setSearchParams({ query: searchQuery });
    setPage(1);
  };
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  const btn = movies.length >= 20;
  return (
    <div>
      <Form onSubmit={handleSubmitForm} />
      <ImageGallery items={movies} />

      {btn && (
        <ButtonMouviesPage type="submit" onClick={loadMore}>
          Load more
        </ButtonMouviesPage>
      )}
      <Toaster />
    </div>
  );
};
export default MoviesPage;
