/* key= '003c13e6e40e640c229ce092669f5920' */
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '003c13e6e40e640c229ce092669f5920';

export async function fetchTrendyFilms() {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFilmsByName(query) {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilmInformation(filmId) {
  try {
    const response = await axios.get(
      `movie/${filmId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilmCredits(filmId) {
  try {
    const response = await axios.get(
      `movie/${filmId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilmReviews(filmId) {
  try {
    const response = await axios.get(
      `movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
