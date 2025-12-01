import DeadpoolImage from "../assets/deadpool.jpg"; 
import PlayButton from "../assets/botao-play.png";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden h-[750px]">

      <img 
        src={DeadpoolImage}
        alt="Deadpool"
        className="w-full h-[800px] object-cover opacity-80"
      />

      <div className="absolute top-1/3 left-[8%] max-w-[500px]">
        <h1 className="text-red-500 text-5xl font-bold">DEADPOOL</h1>

        <p className="mt-4 text-base leading-relaxed text-white">
          Wade Wilson é um ex-agente especial que passou a trabalhar como mercenário.
          Seu mundo é destruído quando um cientista maluco o tortura e o transforma
          em Deadpool, um experimento brutal que lhe dá poderes especiais de cura e
          uma força sobre-humana.
        </p>

        <button className="mt-6 w-[80px] h-[80px] flex items-center justify-center hover:scale-110 transition text-3xl mx-auto">
         <img
            src={PlayButton}
            alt="Play"
            className="w-full h-full object-contain"
          />
        </button>
      </div>

    </section>
  );
};

export default Banner;
