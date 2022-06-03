import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import defaultImg from "../defaultImg.jpg";
import {
  SuperLink,
  List,
  Header,
  LinkGoBack,
  Img,
} from "../styles/MovieDetailsPage.styles";
import { Outlet, useParams, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import * as api from "../services/api";

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [mouvie, setMouvie] = useState({});

  const location = useLocation();
  console.log("lacation", location);

  // console.log("fromPage", fromPage);

  useEffect(() => {
    async function fetchMouvie() {
      try {
        const results = await api.fetchMouvieById(id);

        setMouvie(results);
      } catch (error) {
        toast.error("Movie not found", {
          duration: 1000,
        });
      }
    }
    fetchMouvie();
  }, [id]);

  return (
    <div>
      <LinkGoBack to={location.state?.from ?? "/"}>
        <AiOutlineArrowLeft /> Go back
      </LinkGoBack>

      {mouvie === 404 && <h1>Інформація відсутня. </h1>}
      {mouvie && (
        <>
          <Img
            width="180px"
            height="250px"
            src={
              mouvie.poster_path
                ? `${BASE_URL}${mouvie.poster_path}`
                : defaultImg
            }
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
          <SuperLink to="cast" state={{ from: location.state?.from }}>
            Cast
          </SuperLink>
        </li>
        <li>
          <SuperLink to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </SuperLink>
        </li>
      </List>
      <Outlet />
      <Toaster />
    </div>
  );
}
