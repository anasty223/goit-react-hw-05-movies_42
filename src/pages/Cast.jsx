import { useState, useEffect } from "react";
import * as api from "../services/api";
import { useParams } from "react-router-dom";
import { ListCast, ItemsCast, ImgCast } from "../styles/Caste.styles";
const BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Cast() {
  const [castList, setCastList] = useState("");

  const paramsCast = useParams();
  const paramsIdCast = paramsCast.id;

  useEffect(() => {
    async function fetchMouvieCast() {
      try {
        const results = await api.fetchCast(paramsIdCast);
        console.log("cast.results", results);
        setCastList(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMouvieCast();
  }, [paramsIdCast]);

  return (
    <>
      <h1>Cast</h1>

      <ListCast>
        {castList?.cast?.map((actor) => {
          return (
            <ItemsCast key={actor.id}>
              <h3>{actor.name}</h3>
              <ImgCast
                width="65px"
                height="90px"
                src={`${BASE_URL}${actor.profile_path}`}
              />
            </ItemsCast>
          );
        })}
      </ListCast>
    </>
  );
}
