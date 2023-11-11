import { Title } from 'components/Title/Title';
import { MovieList } from '../components/MovieList/MovieList';

const Home = () => {
  return (
    <main>
      <Title text={'Trending today'} />
      <MovieList />
    </main>
  );
};
export default Home;
