const getGenres = (genresCodes, genresData) => {
  if (!genresData) return [];
  
  return genresData
    .filter(genre => genresCodes.includes(genre.id))
    .map(genre => genre.name);
}

export default getGenres;