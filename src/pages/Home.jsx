import defaultImg from "../defaultImg.jpg";
import { useEffect, useState } from "react";
import {
  NavLinkHome,
  ListMouvies,
  ItemsHome,
  ImgHome,
  HeaderHome,
} from "../styles/Home.styles";

import * as api from "../services/api";

function Home() {
  const [mouvies, setMouvies] = useState(null);

  const BASE_URL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    async function fetchMouvie() {
     
      try {
        const mouvies = await api.fetchTrendingMouvies();
        setMouvies(mouvies.results);
      } catch (error) {
        console.log(error);
      } finally {
      
      }
    }
    fetchMouvie();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {mouvies && (
        <ListMouvies>
          {mouvies.map((mouvie) => (
            <ItemsHome key={mouvie.id}>
              <NavLinkHome to={`/mouvies/${mouvie.id}`}>
                <HeaderHome>{mouvie.title ?? mouvie.name}</HeaderHome>
                <ImgHome
                  width="180px"
                  height="250px"
                  src={
                    mouvie.poster_path
                      ? `${BASE_URL}${mouvie.poster_path}`
                      : defaultImg
                  }
                  alt={"img"}
                />
              </NavLinkHome>
            </ItemsHome>
          ))}
        </ListMouvies>
      )}
    </>
  );
}
export default Home;
