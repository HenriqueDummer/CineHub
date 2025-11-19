import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieGenres } from "../utils/api";

const GenresFilter = ({ selected, onSelect }) => {
  const { data: genres, isLoading } = useQuery(["movie", "genres"], fetchMovieGenres);

  if (isLoading) return <div className="mt-4">Loading genres...</div>;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      <button
        className={`px-5 py-2 rounded-full cursor-pointer uppercase ${!selected ? "bg-white text-black" : "bg-transparent border border-white text-secondary-text"}`}
        onClick={() => onSelect(null)}
      >
        All
      </button>

      {genres.map((g) => (
        <button
          key={g.id}
          onClick={() => onSelect(g.id)}
          className={`px-5 py-2 border-white rounded-full cursor-pointer uppercase ${selected === g.id ? "bg-white text-black" : "bg-transparent border text-secondary-text"}`}
        >
          {g.name}
        </button>
      ))}
    </div>
  );
};

export default GenresFilter;
