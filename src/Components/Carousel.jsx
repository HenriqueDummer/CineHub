import { useRef } from "react";

const PosterCarousel = ({ data, title }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden py-5">
      <h2 className="text-2xl font-bold text-white mb-3 ml-4">
        {title}
      </h2>

      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2"
        >
          ❮
        </button>

        {/* Posters container */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-12"
        >
          {data.map((movie) => (
            <div
              key={movie.id}
              className="shrink-0 w-[150px] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-xl w-[1220px] aspect-2/3 object-cover shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default PosterCarousel;
