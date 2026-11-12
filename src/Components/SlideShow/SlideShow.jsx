import React from "react";
import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";
function SlideShow({ title, movies }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {movies?.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
