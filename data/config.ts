export const BASE_URL = process.env.TMDB_BASE_URL;
export const BASE_OPTIONS: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
  next: {
    revalidate: 60 * 60 * 24,
  },
};
