import { useState, useEffect } from "react";

import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

// {
//       "adult": false,
//       "backdrop_path": "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
//       "genre_ids": [
//         16,
//         12,
//         10751,
//         14,
//         35
//       ],
//       "id": 502356,
//       "original_language": "en",
//       "original_title": "The Super Mario Bros. Movie",
//       "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
//       "popularity": 6572.614,
//       "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
//       "release_date": "2023-04-05",
//       "title": "The Super Mario Bros. Movie",
//       "video": false,
//       "vote_average": 7.5,
//       "vote_count": 1456
//     },

const dummyGenres = ["Action", "Adventure", "Comedy"];

const HeaderCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Carousel slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {data.map((show) => (
          <div key={show.id} className="relative w-full shrink-0">
            {/* The image */}
            <img
              src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
              alt={show.title || "Show poster"}
              className="w-full h-[750px] object-cover"
            />

            {/* Gradient overlay (shadow effect) */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40 opacity-100"></div>
            <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black/40 opacity-100"></div>

            {/* Optional text overlay */}
            <div className="absolute bottom-1/2 top-1/2 -translate-y-20 left-10 ml-10 max-w-[30%] text-white">
              <h1 className="text-white text-5xl font-semibold">
                {show.title}
              </h1>
              <div className="text-secondary-text flex items-center gap-4 mt-6">
                <p className="text-xl font-semibold">
                  {show.release_date.split("").slice(0, 4).join("")}
                </p>
                <div className="w-0.5 h-6 bg-secondary-text"></div>
                {dummyGenres.map((genre) => (
                  <p
                    key={genre}
                    className="text-sm  bg-white/20 px-2 rounded-full"
                  >
                    {genre}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <button className="bg-primary px-7 py-2 rounded-full flex items-center gap-3 text-lg font-semibold">
                  <FaPlay />
                  Play
                </button>
                <button className="px-7 py-2 flex items-center gap-3 text-lg font-semibold">
                  <CiCircleInfo size={26} />
                  Play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-4">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-16 h-2 rounded-full cursor-pointer ${
              i === index ? "bg-primary" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeaderCarousel;
