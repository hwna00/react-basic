import PropTypes from "prop-types";

function Movie({ title, medium_cover_image, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={medium_cover_image} alt="img" />
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
