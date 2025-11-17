import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const InputSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <div className="pt-20">
      <div className="w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[600px] rounded-3xl overflow-hidden"
        >
          <input
            className="bg-neutral-700 pl-6 py-4 w-full focus:outline-none text-white text-lg font-semibold"
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (onSearch) onSearch(e.target.value);
            }}
          />

          <button
            type="submit"
            className="bg-neutral-600 py-2 flex justify-center items-center px-8 cursor-pointer"
          >
            <FaSearch size={26} color="white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
