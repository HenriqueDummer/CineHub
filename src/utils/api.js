// utils/api.js
const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const fetchFromTMDB = async (endpoint) => {
  const response = await fetch(`${TMDB_BASE_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${endpoint}`);
  }
  
  return response.json();
};

export const fetchTrendingMovies = async () => {
  const data = await fetchFromTMDB('/trending/movie/week');
  return data.results;
};

export const fetchPopularMovies = async () => {
  const data = await fetchFromTMDB('/movie/popular');
  return data.results;
};

export const fetchTopRatedMovies = async () => {
  const data = await fetchFromTMDB('/movie/top_rated');
  return data.results;
};

export const fetchMovieGenres = async () => {
  const data = await fetchFromTMDB('/genre/movie/list');
  return data.genres;
};

export const fetchMovieByQuery = async (query) => {
  const data = await fetchFromTMDB(`/search/movie?include_adult=false&query=${query}&language=en-US&page=1`);
  return data.results;
};

