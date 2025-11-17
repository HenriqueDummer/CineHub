import React from "react";
import InputSearch from "../../Components/InputSearch";
import FilterSearch from "../../Components/FilterSearch";
import FilmesSearch from "../../Components/FilmesSearch";

const Search = () => {
  return (
    <div style={{ paddingTop: "1px" }}>
      <InputSearch />
      <FilterSearch />
      <FilmesSearch />
    </div>
  );
};

export default Search;
