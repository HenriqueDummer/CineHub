import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { Link } from "react-router";
import { fetchMovieGenres } from "../utils/api";
import getGenres from "../utils/getGenres";

const HeaderCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  // Fetch genres once at the component level
  const { data: genresData, isLoading: genresLoading } = useQuery({
    queryKey: ['genres'],
    queryFn: fetchMovieGenres,
  });

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [data.length]);

  const currentShow = data[index];
  const currentGenres = getGenres(currentShow.genre_ids, genresData);

  return (
    <section className="relative w-full overflow-hidden h-[750px]">
      {/* Carousel slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {data.map((show) => (
          <div key={show.id} className="relative w-full shrink-0 h-full">
            {/* The image */}
            <img
              src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
              alt={show.title || "Show poster"}
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay (shadow effect) */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40"></div>
            <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black/40"></div>
          </div>
        ))}
      </div>

      {/* Movie info overlay - single instance */}
      <div className="absolute bottom-1/2 top-1/2 -translate-y-20 left-10 ml-10 max-w-[30%] text-white">
        <h1 className="text-white text-5xl font-semibold transition-opacity duration-500">
          {currentShow.title}
        </h1>
        <div className="text-gray-400 flex items-center gap-4 mt-6">
          <p className="text-xl font-semibold">
            {currentShow.release_date.split("").slice(0, 4).join("")}
          </p>
          {!genresLoading && currentGenres.length > 0 && (
            <>
              <div className="w-0.5 h-6 bg-gray-400"></div>
              {currentGenres.map((genre) => (
                <p
                  key={genre}
                  className="text-sm bg-white/20 px-2 rounded-full"
                >
                  {genre}
                </p>
              ))}
            </>
          )}
        </div>
        <div className="flex gap-4 mt-6">
          <button className="bg-primary px-7 py-2 rounded-full flex items-center gap-3 text-lg font-semibold cursor-pointer hover:bg-primary/70 transition-colors">
            <FaPlay size={20} fill="white" />
            Play
          </button>
          <Link to={`/details/${currentShow.id}`}>
            <button className="bg-white/20 px-7 py-2 rounded-full flex items-center gap-3 text-lg font-semibold cursor-pointer hover:bg-white/30 transition-colors">
              <CiCircleInfo size={24} />
              More Info
            </button>
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-4">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-16 h-2 rounded-full cursor-pointer transition-colors ${
              i === index ? "bg-primary" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeaderCarousel;