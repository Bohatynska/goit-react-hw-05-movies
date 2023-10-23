import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'components/Api/Api';
import { Link } from 'react-router-dom';
const MovieList = () => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovie);
  }, []);
  console.log(movies);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
