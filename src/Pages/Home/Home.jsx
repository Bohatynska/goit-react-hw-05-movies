import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'components/Api/Api';
import { FilmTitle, Img, Li, Title, Ul } from './Home.styled';
// import poster from '../../img/no_poster.jpg';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const location = useLocation();
  const currentUrl = location.pathname === '/' ? 'movies/' : '';

  useEffect(() => {
    getTrendingMovies().then(setTrendingList);
  }, []);

  return (
    <>
      <Title>Trending today</Title>

      <Ul>
        {trendingList.map(({ id, poster_path, title, poster }) => (
          <Li key={id}>
            <NavLink
              id={id}
              state={{ from: location }}
              to={`${currentUrl}${id}`}
            >
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : { poster }
                }
                alt={title}
              ></Img>
              <FilmTitle>{title}</FilmTitle>
            </NavLink>
          </Li>
        ))}
      </Ul>
    </>
  );
};
export default Home;
