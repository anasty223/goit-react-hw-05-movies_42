import axios from "axios";
import { Link } from "react-router-dom";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link
            to={`/mouvies/${item.id}`}
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
