import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../services/api";
const BASE_URL = "https://image.tmdb.org/t/p/w500/";
export default function MovieDetailsPage() {
  const { id } = useParams();
  console.log("bookId", id);
  const [mouvie, setMouvie] = useState(null);

  useEffect(() => {
    async function fetchMouvie() {
      try {
        const mouvie = await api.fetchMouvieById(id);
        setMouvie(mouvie);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMouvie();
  }, [id]);

  return (
    <div>
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
    </div>
  );
}
