import React from "react";
import css from "./MovieModal.module.css";
import type { Movie } from "../../types/movie";

export interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w400" + movie.poster_path
              : "https://via.placeholder.com/400x600?text=No+Image"
          }
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview || "Немає опису."}</p>
          <p>
            <strong>Рік:</strong> {movie.release_date}
          </p>
          <button className={css.btn} onClick={onClose}>
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
