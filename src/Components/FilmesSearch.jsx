import React from "react";

const FilmesSearch = () => {
  return (
    <section className="mt-[300px] mb-[200px] ml-[450px] text-white px-6 fixed top-0 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center">
        {Array(8)
          .fill("src/assets/reacher.png")
          .map((src, i) => (
            <div
              key={i}
              className="w-[280px] h-[380px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-150"
            >
              <img
                src={src}
                alt={`imagem-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default FilmesSearch;
