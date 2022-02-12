import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ title, id, medium_cover_image, genres, summary }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={medium_cover_image} alt={title} />
      <ul>
        {genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
      <p>{summary.length > 235 ? `${summary.slice(235)}...` : summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  medium_cover_image: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
};
export default Movie;
