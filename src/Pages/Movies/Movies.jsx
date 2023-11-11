import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFilmsByName } from 'Api/Api.jsx';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList';
import { ErrorMessage } from 'components/ErrorMessage/ErorrMessage';
import { Loader } from 'components/Loader.jsx';
import { Wrapper } from './Movies.styled.js';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [filmList, setFilmList] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useSearchParams();
  const search = searchParam.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  const getQuery = newQuery => {
    if (newQuery === query) {
      alert('You already see results for this query 🥳');
      return;
    }

    setQuery(newQuery);
    setSearchParam(newQuery !== '' ? { query: newQuery } : {});
  };

  async function createFilmList(newQuery) {
    try {
      setFilmList([]);
      setIsLoading(true);

      const films = await fetchFilmsByName(newQuery);
      if (!films.length) {
        setError(false);
        return;
      }

      setFilmList(films);
      setError(true);
    } catch {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (search) {
      setQuery(search);
    }
    if (!query) {
      return;
    }
    createFilmList(query);
    // eslint-disable-next-line
  }, [query]);

  return (
    <Wrapper>
      <SearchForm onSubmit={getQuery} />
      {isLoading && <Loader />}
      {error === false ? (
        <ErrorMessage text={'Sorry, no results for your search'} />
      ) : (
        <MovieList list={filmList} />
      )}
    </Wrapper>
  );
};

export default Movies;
