import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  SuperLink,
  List,
  Header,
  ButtonGoBack,
} from "../styles/MovieDetailsPage.styles";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import * as api from "../services/api";

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [mouvie, setMouvie] = useState(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    async function fetchMouvie() {
      try {
        const results = await api.fetchMouvieById(id);

        setMouvie(results);
      } catch (error) {
        toast.error("Movie not found");
      }
    }
    fetchMouvie();
  }, [id]);

  return (
    <div>
      <ButtonGoBack onClick={goBack}>
        <AiOutlineArrowLeft />
        Go back
      </ButtonGoBack>
      {/* {mouvie === 404 && <h1>Інформація відсутня. Бекенд лінивий!!!</h1>} */}
      {mouvie && (
        <>
          <img
            width="180px"
            height="250px"
            src={`${BASE_URL}${mouvie.poster_path}`}
            alt={"img"}
          />
          <h2>{mouvie.title}</h2>
          <p>{mouvie.overview}</p>
        </>
      )}
      <hr />
      <Header>Additional information</Header>
      <List>
        <li>
          <SuperLink to="cast"> Cast</SuperLink>
        </li>
        <li>
          <SuperLink to="reviews">Reviews</SuperLink>
        </li>
      </List>
      <Outlet />
      <Toaster />
    </div>
  );
}
