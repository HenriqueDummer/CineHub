import { useState } from "react";
import "./InputSearch.css";
import { FaSearch } from "react-icons/fa";

const InputSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <form>
      <div className="search-container">
        <input className="input-search" placeholder="Search" />

        <button className="button-search">
          {" "}
          <FaSearch size={32} color="white" className="lupa-search" />{" "}
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
