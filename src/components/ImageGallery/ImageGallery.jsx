import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.title}

          {/* <img
            width="180px"
            height="250px"
            src={`${BASE_URL}${item.poster_path}`}
            alt={"img"}
          /> */}
        </li>
      ))}
    </ul>
  );
}
