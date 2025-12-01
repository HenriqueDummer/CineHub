import { useQuery } from "@tanstack/react-query";
import Banner from "../../Components/Banner";
import { useEffect, useState } from "react";
import SelectFilter from "../../Components/SelectFilter";
import {
  fetchSeriesGenres,
  fetchPopularSeries,
  fetchSeriesByGenre,
  fetchTrendingSeries
} from "../../utils/api";
import Carousel from "../../Components/Carousel";
import HeaderCarousel from "../../Components/HeaderCarousel";

const Series = () => {
  // gêneros de séries (para o filtro)
  const { data: genres, isLoading: loadingGenres } = useQuery({
    queryKey: ["seriesGenres"],
    queryFn: fetchSeriesGenres,
  });

  // trending para header (opcional)
  const { data: trendingSeries, isLoading: loadingTrending } = useQuery({
    queryKey: ["trendingSeries"],
    queryFn: fetchTrendingSeries,
  });

  // popular como fallback caso nenhum gênero selecionado ainda
  const { data: popularSeries, isLoading: loadingPopular } = useQuery({
    queryKey: ["popularSeries"],
    queryFn: fetchPopularSeries,
  });

  // estado do gênero selecionado
const [selectedGenreId, setSelectedGenreId] = useState(null);

  // quando carregar os gêneros, seleciona o primeiro por padrão (opcional)
  useEffect(() => {
    if (genres && !selectedGenreId) {
      setSelectedGenreId(genres[0]?.id ?? null);
    }
  }, [genres, selectedGenreId]);

  // séries filtradas pelo gênero selecionado
  const {
    data: seriesByGenre,
    isLoading: loadingByGenre,
  } = useQuery({
    queryKey: ["seriesByGenre", selectedGenreId],
    queryFn: () => fetchSeriesByGenre(selectedGenreId),
    enabled: !!selectedGenreId, // só busca quando tiver gênero
  });

        if (  loadingGenres || loadingTrending || loadingPopular || loadingByGenre) {
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

        {/* se houver série por gênero mostra ela, senão mostra populares */}
        <Carousel data={seriesByGenre ?? popularSeries ?? []} />
        <SelectFilter title={"FILMES"} />
      </div>
  </>
  
   
  );
};

export default Series;