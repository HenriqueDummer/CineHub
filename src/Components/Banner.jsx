import DeadpoolImage from "../assets/reacher.png"; // ajuste o caminho

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden h-[750px]">

      {/* Imagem */}
      <img 
        src={DeadpoolImage}
        alt="Deadpool"
        className="w-full h-full object-cover opacity-80"
      />

      {/* Conteúdo */}
      <div className="absolute top-1/3 left-[8%] max-w-[500px]">
        <h1 className="text-red-500 text-5xl font-bold">DEADPOOL</h1>

        <p className="mt-4 text-base leading-relaxed">
          Wade Wilson é um ex-agente especial que passou a trabalhar como mercenário.
          Seu mundo é destruído quando um cientista maluco o tortura e o transforma
          em Deadpool, um experimento brutal que lhe dá poderes especiais de cura e
          uma força sobre-humana.
        </p>

        {/* Botão Play */}
        <button className="mt-6 w-[80px] h-[80px] rounded-full border-4 border-purple-400 flex items-center justify-center hover:scale-110 transition text-3xl">
          ▶
        </button>
      </div>

    </section>
  );
};

export default Banner;
