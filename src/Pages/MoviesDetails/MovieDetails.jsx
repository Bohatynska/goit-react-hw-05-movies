import { getMovieDetails } from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FilmTitle, GoBackButton, Img, Wrapper } from './MovieDetails.styled';
import poster from 'components/img/image-not-found.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    poster_path,
    title,
    original_title,
    vote_average,
    release_date,
    // overview,
    // genres,
    // runtime,
    // spoken_languages,
  } = movie;

  let date = new Date(release_date);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <GoBackButton> Go back</GoBackButton>
      </Link>

      <Wrapper>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : { poster }
          }
          alt={title}
          width="300"
        />
        <FilmTitle>
          {original_title}({date.getFullYear()})
        </FilmTitle>
        <ul>
          <li>
            <p>User Score:{vote_average.toFixed(1)}</p>
          </li>
          <li>
            <h3>Overview</h3>
          </li>
          <li>
            <p></p>
          </li>
          <li>
            <h4>Genres</h4>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
      </Wrapper>
    </>
  );
};

export default MovieDetails;
