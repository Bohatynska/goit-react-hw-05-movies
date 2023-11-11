import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchTrendyFilms } from 'Api/Api';
import { imgUrl } from 'services/url';
import poster from '../../img/image-not-found.jpg';

import { List, MovieItem, Poster } from './MovieList.styled';

export const MovieList = ({ list }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const currentUrl = location.pathname === '/' ? 'movies/' : '';

  async function createMovieList() {
    const trendyMovies = await fetchTrendyFilms();

    if (!trendyMovies) {
      return;
    }
    setMovies(trendyMovies);
  }

  useEffect(() => {
    if (list) {
      setMovies(list);
      return;
    }
    createMovieList();
  }, [list]);

  return (
    <div>
      <List>
        {movies.map(
          ({ id, poster_path, title, release_date, vote_average }) => (
            <MovieItem key={id}>
              <NavLink to={`${currentUrl}${id}`} state={{ from: location }}>
                <Poster
                  src={poster_path ? imgUrl + poster_path : poster}
                  alt={title}
                ></Poster>
              </NavLink>
            </MovieItem>
          )
        )}
      </List>
    </div>
  );
};
