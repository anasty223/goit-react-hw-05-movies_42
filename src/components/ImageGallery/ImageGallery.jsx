import PropTypes from "prop-types";
import axios from "axios";
import {
  NavLinkMouviePage,
  ListMouviesPage,
  ItemsMouviePage,
  ImgMouviePage,
} from "../../styles/ImageGallery.styles";
import defaultImg from "../../defaultImg.jpg";
const BASE_URL = "https://image.tmdb.org/t/p/w500/";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default function ImageGallery({ items }) {
  return (
    <ListMouviesPage>
      {items.map((item) => (
        <ItemsMouviePage key={item.id}>
          <NavLinkMouviePage to={`/mouvies/${item.id}`}>
            {item.title}
            <ImgMouviePage
              width="180px"
              height="250px"
              src={
                item.poster_path ? `${BASE_URL}${item.poster_path}` : defaultImg
              }
              alt={"img"}
            />
          </NavLinkMouviePage>
        </ItemsMouviePage>
      ))}
    </ListMouviesPage>
  );
}
ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};
