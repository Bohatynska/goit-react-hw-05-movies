/* key= '003c13e6e40e640c229ce092669f5920' */
import axios from 'axios';

axios.defaults.baseURL = 'http://api.themoviedb.org/3/';
const API_KEY = '003c13e6e40e640c229ce092669f5920';

export async function getTrendingMovies() {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
export async function getSearchMovie(query) {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(filmId) {
  try {
    const response = await axios.get(
      `movie/${filmId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCast(filmId) {
  try {
    const response = await axios.get(
      `movie/${filmId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getMovieReview(filmId) {
  try {
    const response = await axios.get(
      `movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
