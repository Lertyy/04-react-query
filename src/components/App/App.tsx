import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../../types/movie";
import { getMovies } from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", searchQuery, page],
    queryFn: () => getMovies(searchQuery, page),
    enabled: searchQuery.trim().length > 0,
  });

  const movies = data?.results || [];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />

      {isLoading && <p className={css.loading}>Завантаження...</p>}
      {error && (
        <p className={css.error}>
          Помилка при завантаженні фільмів. Спробуйте ще раз.
        </p>
      )}

      {movies.length > 0 && (
        <div>
          <p>Знайдено фільмів: {movies.length}</p>
          <ul>
            {movies.map((movie: Movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}

      {!isLoading && movies.length === 0 && searchQuery && (
        <p className={css.noResults}>Фільмів не знайдено</p>
      )}
    </div>
  );
}

export default App;
