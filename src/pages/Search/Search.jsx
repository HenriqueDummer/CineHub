import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieByQuery } from "../../utils/api";
import InputSearch from "../../Components/InputSearch";
import { Link } from "react-router";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  const { data, isLoading } = useQuery({
    queryKey: ["movies", debouncedSearch],
    queryFn: () => fetchMovieByQuery(debouncedSearch),
  });

  return (
    <div className="min-h-screen bg-neutral-900 text-white">

      <InputSearch onSearch={(value) => setSearch(value)} />

      <div className="max-w-6xl mx-auto px-4 mt-10">
        {isLoading && <p className="text-center text-lg">Loading...</p>}

        {!debouncedSearch && (
          <p className="text-center text-neutral-400 text-lg">
            Type something to search for movies...
          </p>
        )}

        {debouncedSearch && data?.length === 0 && (
          <p className="text-center text-neutral-400 text-lg">
            No movies found
          </p>
        )}

        {data?.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {data.map((movie) => (
              <Link
                to={`/details/${movie.id}`}
                key={movie.id}
                className="bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform"
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/placeholder.png"
                  }
                  alt={movie.title}
                  className="w-full aspect-2/3 object-cover"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
