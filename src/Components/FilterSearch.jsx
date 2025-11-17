import React from "react";
import "./FilterSearch.css";

const FilterSearch = () => {
  return (
    <div className="nav"> 
      <div className="text-secondary-text text-secondary-text text-1xl hover:text-[#516DFF] font-medium h-10 w-20 cursor-pointer">
        Horror
      </div>
      <div className="text-secondary-text text-1xl hover:text-[#516DFF] font-medium h-10 w-20 cursor-pointer">
        Action
      </div>
      <div className="text-secondary-text text-1xl hover:text-[#516DFF] font-medium h-10 w-24 cursor-pointer">
        Comedy
      </div>
      <div className="text-secondary-text text-1xl hover:text-[#516DFF] font-medium h-10 w-20 cursor-pointer">
        Thriller
      </div>
      <div className="text-secondary-text text-1xl hover:text-[#516DFF] font-medium h-10 w-20 cursor-pointer">
        Sci-fi
      </div>
      <div className="text-secondary-text text-1xl hover:text-[#516DFF] font-medium h-10 w-20 cursor-pointer">
        Drama
      </div>
      <div className="text-secondary-text text-1xl hover:text-[#516DFF] font-medium h-10 w-20 cursor-pointer">
        Romantic
      </div>
    </div>
  );
};

export default FilterSearch;
