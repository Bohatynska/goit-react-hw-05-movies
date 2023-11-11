import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AppBar } from 'components/AppHeader/AppHeader';
import { Loader } from 'components/Loader';
import Container from './App.styled';

const Home = lazy(() => import('../../Pages/Home'));
const Movies = lazy(() => import('../../Pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../Pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
export const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
