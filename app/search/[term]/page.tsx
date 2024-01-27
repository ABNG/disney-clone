import AISuggestions from "@/components/AISuggestions";
import MoviesCarousal from "@/components/MoviesCarousal";
import { MovieApi } from "@/data/api/movie_api";
import { MovieModel } from "@/data/model/movie_model";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = async ({ params: { term } }: Props) => {
  const termToUse = decodeURI(term);
  const searchMovies: Array<MovieModel> = await MovieApi.getSearchedMovieList(
    termToUse
  );
  const popularMovies: Array<MovieModel> = await MovieApi.getPopularMovieList();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-10">
        <h1 className="text-6xl font-bold px-10">Result for "{termToUse}"</h1>

        {/* AI suggestion Client Component */}
        <AISuggestions term={termToUse} />

        <MoviesCarousal title="Movies" movies={searchMovies} isVertical />
        <MoviesCarousal title="You May Also Like" movies={popularMovies} />
      </div>
    </div>
  );
};

export default SearchPage;
