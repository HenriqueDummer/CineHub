import { Link } from "react-router"

const IMG_BASE = "https://image.tmdb.org/t/p/w500";

const Grid = ({ isMovie, data }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-6 ">
            {data.map((show) => (
                <Link
                    to={`/${isMovie ? "movie" : "tv_series"}/details/${show.id}`}
                    key={show.id}
                    className="group block relative rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg"
                >
                    <img
                        src={
                            show.poster_path
                                ? `${IMG_BASE}${show.poster_path}`
                                : "/src/assets/reacher.png"
                        }
                        alt={show.title}
                        className="w-full aspect-2/3 object-cover"
                    />
                </Link>
            ))}
        </div>
    )
}

export default Grid