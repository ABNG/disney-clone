import { MovieApi } from "@/data/api/movie_api";
import { MovieModel } from "@/data/model/movie_model";
import CarousalBanner from "./CarousalBanner";

type Props = {
  id?: string;
  keywords?: string;
};

const CarousalBannerWrapper = async ({ id, keywords }: Props) => {
  const discoverMovies: Array<MovieModel> = await MovieApi.getDiscoverMovieList(
    id,
    keywords
  );
  return <CarousalBanner movies={discoverMovies} />;
};

export default CarousalBannerWrapper;
