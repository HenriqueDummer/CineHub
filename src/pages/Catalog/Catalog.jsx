import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies, fetchMoviesByGenre } from "../../utils/api";
import GenresFilter from "../../Components/GenresFilter";
import Grid from "../../Components/Grid";
import HeaderCarousel from "../../Components/HeaderCarousel";


const Catalog = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const { data: moviesByGenre, isLoading: loadingByGenre } = useQuery(
    ["movies", "genre", selectedGenre],
    () => fetchMoviesByGenre(selectedGenre),
    { enabled: !!selectedGenre }
  );

  const { data: popular, isLoading: loadingPopular } = useQuery(
    ["movies", "popular"],
    fetchPopularMovies,
  );

  const movies = selectedGenre ? moviesByGenre || [] : popular || [];

  return (
    <div className="pt-24 px-6 pb-16 min-h-screen text-white w-[90%] m-auto">
      <HeaderCarousel  />
      <h2 className="text-2xl font-semibold mb-4">Movies</h2>

      <GenresFilter selected={selectedGenre} onSelect={setSelectedGenre} />

      {((loadingByGenre && selectedGenre) || loadingPopular) && <p className="mt-6">Loading...</p>}

     <Grid data={movies} isMovie />
    </div>
  );
};

export default Catalog;