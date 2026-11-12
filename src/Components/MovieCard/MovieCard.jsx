import React from "react";
import styles from "./MovieCard.module.css";

import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  const poster = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "";

  const title = movie.title || movie.name || "Movie";
  const genres = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.cardWrapper}>
      <img
        className={styles.poster}
        src={poster}
        alt={`${title} poster`}
      />

      <div className={styles.hoverCard}>
        <img
          className={styles.hoverImage}
          src={poster}
          alt={`${title} preview`}
        />

        <div className={styles.badge}>Recently Added</div>

        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16</span>
          <span className={styles.tag}>
            {movie.media_type === "tv" ? "TV Show" : "Movie"}
          </span>
          <span className={styles.tag}>HD</span>
        </div>

        <div className={styles.genres}>
          {genres.map((genre, index) => (
            <span key={genre}>
              {genre}
              {index < genres.length - 1 && (
                <span className={styles.dot}> •</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
