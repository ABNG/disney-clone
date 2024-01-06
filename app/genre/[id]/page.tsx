import AISuggestions from "@/components/AISuggestions";
import MoviesCarousal from "@/components/MoviesCarousal";
import { MovieApi } from "@/data/api/movie_api";
import { MovieModel } from "@/data/model/movie_model";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = async ({
  params: { id },
  searchParams: { genre },
}: Props) => {
  const discoveryMovies: Array<MovieModel> =
    await MovieApi.getDiscoverMovieList(id, genre);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-10">
        <h1 className="text-6xl font-bold px-10">Result for "{genre}"</h1>

        {/* AI suggestion Client Component */}
        <AISuggestions term={genre} />

        <MoviesCarousal title="Genre" movies={discoveryMovies} isVertical />
      </div>
    </div>
  );
};

export default GenrePage;
