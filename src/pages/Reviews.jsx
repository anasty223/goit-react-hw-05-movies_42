import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../services/api";

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState("");

  const paramsCast = useParams();
  const paramsIdCast = paramsCast.id;

  useEffect(() => {
    async function fetchMouvieReviews() {
      try {
        const results = await api.fetchReviews(paramsIdCast);
        console.log("results_review", results);
        setReviewsList(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMouvieReviews();
  }, [paramsIdCast]);

  return (
    <>
      {reviewsList?.length === 0 && (
        <h1>We don't have any reviews for this movie.</h1>
      )}
      <ul>
        {reviewsList?.results?.map((item) => {
          return (
            <li key={item.id}>
              <h2>Author: {item.author}</h2>
              <p> {item.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
