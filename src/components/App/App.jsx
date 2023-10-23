import Container from './App.styled';
import { Routes, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import NotFound from 'components/AppHeader/NotFound';
// import MovieList from 'components/MovieList/MovieList';
import Home from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';
import MovieDetails from 'Pages/MoviesDetails/MovieDetails';

export const App = () => {
  return (
    <Container>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={Movies} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="/cast" /> */}
          {/* <Route path="/reviews" /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
