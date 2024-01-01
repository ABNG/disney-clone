import { MovieModel } from "@/data/model/movie_model";
import { FullImageUrl } from "@/lib/full_image_url";
import Image from "next/image";

type Props = {
  movie: MovieModel;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105  duration-200 ease-out hover:drop-shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
      <p className="absolute left-5 bottom-5 z-20">{movie.title}</p>
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
        src={FullImageUrl(movie.backdrop_path || movie.poster_path)}
        width={1920}
        height={1080}
        alt={movie.title}
        key={movie.id}
      />
    </div>
  );
};

export default MovieCard;
