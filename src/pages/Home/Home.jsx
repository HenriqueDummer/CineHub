import { useQuery } from "@tanstack/react-query";
import Carousel from "../../Components/Carousel";
import HeaderCarousel from "../../Components/HeaderCarousel";
import { fetchMovieGenres, fetchPopularMovies, fetchTopRatedMovies, fetchTrendingMovies } from "../../utils/api";

const Home = () => {
  // Fetch trending movies for header
  const { data: trendingMovies, isLoading: loadingTrending } = useQuery({
    queryKey: ['trendingMovies'],
    queryFn: fetchTrendingMovies,
  });

  // Fetch popular movies for carousel
  const { data: popularMovies, isLoading: loadingPopular } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
  });

  const { data: topRatedMovies, isLoading: loadingTopRated } = useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: fetchTopRatedMovies,
  });


  // Loading state
  if (loadingTrending || loadingPopular || loadingTopRated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const headerData = popularMovies?.slice(0, 5);

  return (
    <>
      <HeaderCarousel data={headerData} />
      <Carousel title="Trending" data={trendingMovies} isMovie />
      <Carousel title="Popular" data={popularMovies} isMovie/>
      <Carousel title="Top rated" data={topRatedMovies} isMovie />
    </>
  )
}

export default Home