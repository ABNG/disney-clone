import CarousalBannerWrapper from "@/components/CarousalBannerWrapper";
import MoviesCarousal from "@/components/MoviesCarousal";
import { MovieApi } from "@/data/api/movie_api";
import { MovieModel } from "@/data/model/movie_model";

export default async function Home() {
  const upcomingMovies: Array<MovieModel> =
    await MovieApi.getUpcomingMovieList();
  const topRatedMovies: Array<MovieModel> =
    await MovieApi.getTopRatedMovieList();
  const popularMovies: Array<MovieModel> = await MovieApi.getPopularMovieList();

  return (
    <main>
      <CarousalBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousal title="Upcoming" movies={upcomingMovies} />
        <MoviesCarousal title="Top Rated" movies={topRatedMovies} />
        <MoviesCarousal title="Popular" movies={popularMovies} />
      </div>
    </main>
  );
}
