import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

if (!TMDB_API_KEY) {
  console.error("TMDB API key is not set. Please check .env file");
}

const apiClient = axios.create({
  baseURL: TMDB_BASE_URL,
});

export const getMovies = async (
  query: string,
  page: number = 1
): Promise<MoviesResponse> => {
  if (!query.trim()) {
    return {
      results: [],
      total_pages: 0,
      total_results: 0,
      page: 1,
    };
  }

  const response = await apiClient.get<MoviesResponse>("/search/movie", {
    params: {
      api_key: TMDB_API_KEY,
      query,
      page,
    },
  });

  return response.data;
};