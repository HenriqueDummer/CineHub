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
  const data = await fetchFromTMDB('/trending/movie/week?language=en-US&page=1');
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

export const fetchTrendingSeries = async () => {
  const data = await fetchFromTMDB('/trending/tv/week');
  return data.results;
};

// Séries populares
export const fetchPopularSeries = async () => {
  const data = await fetchFromTMDB('/tv/popular');
  return data.results;
};

// Séries top rated
export const fetchTopRatedSeries = async () => {
  const data = await fetchFromTMDB('/tv/top_rated');
  return data.results;
};

// Gêneros de séries
export const fetchSeriesGenres = async () => {
  const data = await fetchFromTMDB('/genre/tv/list');
  return data.genres;
};

export const fetchSeriesByGenre = async (genreId, page = 1) => {
  if (!genreId) return [];
  const data = await fetchFromTMDB(`/discover/tv?with_genres=${genreId}&sort_by=popularity.desc&page=${page}`);
  return data.results;
};

export const fetchMoviesByGenre = async (genreId, page = 1) => {
  if (!genreId) return [];
  const data = await fetchFromTMDB(`/discover/movie?with_genres=${genreId}&sort_by=popularity.desc&page=${page}`);
  return data.results;
};