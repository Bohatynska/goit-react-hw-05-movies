import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'components/Api/Api';
import { Link } from 'react-router-dom';
import { SearchWrap } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const search = searchParam.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const location = useLocation();

  const newQuery = value => {
    if (value === query) {
      return;
    }
    setQuery(value);
    setSearchParam(value !== '' ? { query: value } : {});
  };

  async function getFilms(value) {
    try {
      setFilms([]);
      setIsLoading(true);

      const filmList = await getSearchMovie(value);
      console.log(filmList);
      if (!filmList.length) {
        return;
      }

      setFilms(filmList);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (search) {
      setQuery(search);
    }
    if (!query) {
      return;
    }
    getFilms(query);
  }, [query, search]);

  return (
    <>
      <SearchWrap>
        <SearchForm onSubmit={newQuery} />
      </SearchWrap>
      <div>
        {films.map(film => (
          <li key={film.id}>
            <Link
              id={film.id}
              to={`/movies/${film.id}`}
              state={{ from: location }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt={film.title}
              />
              {film.title}
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};
export default Movies;
