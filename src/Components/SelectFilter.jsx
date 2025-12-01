const SelectFilter = ({ title, genres = [], onSelect }) => {
  return (
    <div className="text-white">
      <p className="text-[36px] font-semibold ml-10">{title}</p>

      <section className="flex flex-wrap gap-6 justify-between max-w-[85%] mx-auto mt-8 cursor-pointer">
        {genres.map((genre) => (
          <span
            key={genre.id}
            onClick={() => onSelect?.(genre.id)} // envia o ID correto!
            className="w-[140px] h-[50px] px-4 border-2 border-white rounded-3xl text-base font-semibold flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black transition-colors duration-200"
          >
            {genre.name.toUpperCase()}
          </span>
        ))}
       
      </section>
    </div>
  );
};  

export default SelectFilter;
