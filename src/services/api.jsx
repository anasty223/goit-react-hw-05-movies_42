import axios from "axios";
const API_KEY = "eba0388c934688725105b53c98cf82ca";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function fetchTrendingMouvies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data;
}

export async function fetchMouvieById(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return response === 404 ? response : response.data;
}

export async function searchFilms(query, page) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  return response.data;
}
export async function fetchCast(movie_id) {
  const response = await axios.get(`
/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export async function fetchReviews(params) {
  const response = await axios.get(
    `/movie/${params}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
}
