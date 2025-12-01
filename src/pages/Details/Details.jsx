import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchShowCredits, fetchShowDetails, fetchSimilarShows, fetchShowVideos } from '../../utils/api';
import PosterCarousel from '../../Components/Carousel';
import { IoPlay, IoClose } from 'react-icons/io5';
import { BiMovie } from 'react-icons/bi';
import { useState } from 'react';

const Details = ({ isMovie }) => {
  const { id } = useParams();
  const mediaType = isMovie ? 'movie' : 'tv';
  const [showTrailer, setShowTrailer] = useState(false);
  console.log(isMovie)
  // Fetch main details
  const { data: details, isLoading: detailsLoading } = useQuery({
    queryKey: [mediaType, id],
    queryFn: () => fetchShowDetails(mediaType, id)
  });

  // Fetch credits (cast & crew)
  const { data: credits } = useQuery({
    queryKey: [mediaType, id, 'credits'],
    queryFn: () => fetchShowCredits(mediaType, id)
  });

  // Fetch similar content
  const { data: similar } = useQuery({
    queryKey: [mediaType, id, 'similar'],
    queryFn: () => fetchSimilarShows(mediaType, id)
  });

  // Fetch videos (trailers)
  const { data: videos } = useQuery({
    queryKey: [mediaType, id, 'videos'],
    queryFn: () => fetchShowVideos(mediaType, id)
  });

  if (detailsLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const title = isMovie ? details?.title : details?.name;
  const releaseDate = isMovie ? details?.release_date : details?.first_air_date;
  const runtime = isMovie ? details?.runtime : details?.episode_run_time?.[0];
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

  // Get the official trailer or first video
  const trailer = videos?.results?.find(
    video => video.type === 'Trailer' && video.site === 'YouTube'
  ) || videos?.results?.[0];

  const handleWatchTrailer = () => {
    if (trailer) {
      setShowTrailer(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-10">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${IMAGE_BASE_URL}/original${details?.backdrop_path})`
        }}
      >
        <div className="absolute translate-y-16 z-10 inset-0 pt-32 px-8 md:px-16 w-[90%] m-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{title}</h1>
          <p className="font-semibold text-lg text-secondary-text mb-2">by {details?.production_companies?.[0]?.name || 'Unknown'}</p>

          <p className="text-secondary-text max-w-xl text-sm mb-6 leading-relaxed">
            {details?.overview}
          </p>

          <div className="flex items-center gap-4 mb-8 text-sm text-secondary-text">
            <span className='font-semibold'>{new Date(releaseDate).getFullYear()}</span>
            <div className='h-7 w-0.5 bg-white'></div>
            {runtime && <span className='font-semibold'>{runtime} min</span>}
            <div className='h-7 w-0.5 bg-white'></div>
            <div className='flex gap-2'>
              {details?.genres?.map((genre, idx) => (
                <span key={idx} className="px-3 py-1 font-semibold bg-white/10 rounded-full">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors">
              <IoPlay /> Play
            </button>
            <button
              onClick={handleWatchTrailer}
              disabled={!trailer}
              className="bg-white/10 cursor-pointer hover:bg-gray-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <BiMovie /> Watch trailer
            </button>
          </div>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black/40"></div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && trailer && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowTrailer(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <IoClose size={40} />
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title={trailer.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Casting Section */}
      <div className="px-8 md:px-16 py-12 w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-8">Casting</h2>
        <div className="flex justify-center gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {credits?.cast?.slice(0, 10).map((actor) => (
            <div key={actor.id} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mb-3 overflow-hidden">
                {actor.profile_path ? (
                  <img
                    src={`${IMAGE_BASE_URL}/w185${actor.profile_path}`}
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl text-gray-500">
                    👤
                  </div>
                )}
              </div>
              <p className="font-semibold text-sm">{actor.name}</p>
              <p className="text-xs text-gray-400">as</p>
              <p className="text-xs text-gray-400">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Section */}
      <div className="px-8 md:px-16 py-12 w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-8">Similar</h2>
        {similar?.results && <PosterCarousel data={similar?.results} />}
      </div>
    </div>
  );
};

export default Details;