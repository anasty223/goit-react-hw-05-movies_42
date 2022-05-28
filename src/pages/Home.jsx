import { useEffect, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

import * as api from "../services/api";
import styled from "styled-components";

export const ListMouvies = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  font-size: 20px;
`;

function Home() {
  const [mouvies, setMouvies] = useState(null);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    async function fetchMouvie() {
      setLoading(true);
      try {
        const mouvies = await api.fetchTrendingMouvies();
        setMouvies(mouvies.results);
        console.log(mouvies.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMouvie();
  }, []);

  return (
    <>
      {mouvies && (
        <ListMouvies>
          {mouvies.map((mouvie) => (
            <li key={mouvie.id}>
              <NavLink to={`/mouvies/${mouvie.id}`}>{mouvie.title}</NavLink>
              {/* <img
                width="180px"
                height="250px"
                src={`${BASE_URL}${mouvie.poster_path}`}
                alt={"img"}
              /> */}
            </li>
          ))}
        </ListMouvies>
      )}
    </>
  );
}
export default Home;
