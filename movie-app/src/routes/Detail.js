import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovieDetail = useCallback(async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => getMovieDetail, [getMovieDetail]);
  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <div>
            <img src={movie.medium_cover_image} alt="poster" />
            <ul>
              <li>
                Genre:
                {movie.genres.map((genre) => (
                  <span>{genre}</span>
                ))}
              </li>
              <li>
                <p>{movie.description_full}</p>
              </li>
              <li>rating: {movie.rating}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
