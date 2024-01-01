import { BASE_OPTIONS, BASE_URL } from "../config";
import { GenreModel } from "../model/genre_model";
import { MovieModel } from "../model/movie_model";

export class MovieApi {
  static async getGenreList(): Promise<Array<GenreModel>> {
    const response = await fetch(
      `${BASE_URL}genre/movie/list?language=en`,
      BASE_OPTIONS
    );
    const data = await response.json();
    return data.genres as Array<GenreModel>;
  }
  static async getUpcomingMovieList(): Promise<Array<MovieModel>> {
    const url = new URL(`${BASE_URL}movie/upcoming`);
    return this.getMovieList(url);
  }
  static async getTopRatedMovieList(): Promise<Array<MovieModel>> {
    const url = new URL(`${BASE_URL}movie/top_rated`);
    return this.getMovieList(url);
  }
  static async getPopularMovieList(): Promise<Array<MovieModel>> {
    const url = new URL(`${BASE_URL}movie/popular`);
    return this.getMovieList(url);
  }
  static async getDiscoverMovieList(
    id?: string,
    keywords?: string
  ): Promise<Array<MovieModel>> {
    const url = new URL(`${BASE_URL}discover/movie`);
    keywords && url.searchParams.set("with_keywords", keywords);
    id && url.searchParams.set("with_genres", id);
    return this.getMovieList(url);
  }

  static async getSearchedMovieList(term: string): Promise<Array<MovieModel>> {
    const url = new URL(`${BASE_URL}search/movie`);
    url.searchParams.set("query", term);
    return this.getMovieList(url);
  }

  static async getMovieList(url: URL): Promise<Array<MovieModel>> {
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");
    const response = await fetch(url.toString(), BASE_OPTIONS);
    const data = await response.json();
    return data.results as Array<MovieModel>;
  }
}
