import { useQuery } from "@tanstack/react-query";
import Banner from "../../Components/Banner";
import { useEffect, useState } from "react";
import SelectFilter from "../../Components/SelectFilter";
import {
  fetchSeriesGenres,
  fetchPopularSeries,
  fetchSeriesByGenre,
  fetchTrendingSeries,
  fetchMovieGenres,
  fetchPopularMovies,
  fetchMoviesByGenre,
} from "../../utils/api";
import Carousel from "../../Components/Carousel";

const Series = () => {
  const { data: genres, isLoading: loadingGenres } = useQuery({
    queryKey: ["seriesGenres"],
    queryFn: fetchSeriesGenres,
  });

  const { data: trendingSeries, isLoading: loadingTrending } = useQuery({
    queryKey: ["trendingSeries"],
    queryFn: fetchTrendingSeries,
  });

  const { data: popularSeries, isLoading: loadingPopular } = useQuery({
    queryKey: ["popularSeries"],
    queryFn: fetchPopularSeries,
  });

const [selectedGenreId, setSelectedGenreId] = useState(null);


  useEffect(() => {
    if (genres && !selectedGenreId) {
      setSelectedGenreId(genres[0]?.id ?? null);
    }
  }, [genres, selectedGenreId]);

  const {
    data: seriesByGenre,
    isLoading: loadingByGenre,
  } = useQuery({
    queryKey: ["seriesByGenre", selectedGenreId],
    queryFn: () => fetchSeriesByGenre(selectedGenreId),
    enabled: !!selectedGenreId,
  });

  const { data: movieGenres, isLoading: loadingMovieGenres } = useQuery({
    queryKey: ["movieGenres"],
    queryFn: fetchMovieGenres,
  });

  const { data: popularMovies, isLoading: loadingPopularMovies } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  const [selectedMovieGenreId, setSelectedMovieGenreId] = useState(null);

  useEffect(() => {
    if (movieGenres && !selectedMovieGenreId) {
      setSelectedMovieGenreId(movieGenres[0]?.id ?? null);
    }
  }, [movieGenres, selectedMovieGenreId]);

  const {
    data: moviesByGenre,
    isLoading: loadingMoviesByGenre,
  } = useQuery({
    queryKey: ["moviesByGenre", selectedMovieGenreId],
    queryFn: () => fetchMoviesByGenre(selectedMovieGenreId),
    enabled: !!selectedMovieGenreId,
  });


    if (  loadingGenres || loadingTrending || loadingPopular || loadingByGenre || 
          loadingMovieGenres || loadingPopularMovies || loadingMoviesByGenre) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
  
  <>
      <Banner />
       <div className="mt-24">
        <SelectFilter
          title={"SÉRIES"}
          genres={genres ?? []}
          selectedGenreId={selectedGenreId}
          onSelect={(id) => setSelectedGenreId(id)}
        />

        <Carousel data={seriesByGenre ?? popularSeries ?? []} />
        <SelectFilter
          title={"FILMES"}
          genres={movieGenres ?? []}
          selectedGenreId={selectedMovieGenreId}
          onSelect={(id) => setSelectedMovieGenreId(id)}
        />

        <Carousel data={moviesByGenre ?? popularMovies ?? []} />
      </div>
  </>
  
   
  );
};

export default Series;