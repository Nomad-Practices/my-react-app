import PropTypes from "prop-types";

function Movie({ title, medium_cover_image, genres, summary }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={medium_cover_image} alt={title} />
      <ul>
        {genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string,
  medium_cover_image: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
};
export default Movie;
