const SelectFilter = ({ title }) => {
  return (
    <div className="text-white">
      <p className="text-[36px] font-semibold ml-10">{title}</p>

      <section className="flex flex-wrap gap-6 justify-between max-w-[85%] mx-auto mt-8 cursor-pointer">
        <span className="w-[140px] h-[50px] px-4 border-2 border-white rounded-3xl text-base font-semibold flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black transition-colors duration-200">ACTION</span>
        <span className="w-[140px] h-[50px] px-4 border-2 border-white rounded-3xl text-base font-semibold flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black transition-colors duration-200">COMEDY</span>
        <span className="w-[140px] h-[50px] px-4 border-2 border-white rounded-3xl text-base font-semibold flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black transition-colors duration-200">DRAMA</span>
        <span className="w-[140px] h-[50px] px-4 border-2 border-white rounded-3xl text-base font-semibold flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black transition-colors duration-200">HORROR</span>
        <span className="w-[140px] h-[50px] px-4 border-2 border-white rounded-3xl text-base font-semibold flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black transition-colors duration-200">SCI-FI</span>
        <span className="w-[140px] h-[50px] px-4 border-2 border-white rounded-3xl text-base font-semibold flex items-center justify-center hover:bg-blue-500 hover:text-black hover:border-black transition-colors duration-200">ROMANCE</span>
      </section>
    </div>
  );
};  

export default SelectFilter;
