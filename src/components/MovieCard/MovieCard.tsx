import type { Movie } from "../../types/movie";
import css from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={css.card}>
      <div className={css.poster}>
        <p>Постер</p>
      </div>
      <div className={css.info}>
        <h3 className={css.title}>{movie.title}</h3>
        <p className={css.year}>{movie.release_date?.split("-")[0] || "N/A"}</p>
      </div>
    </div>
  );
};

export default MovieCard;