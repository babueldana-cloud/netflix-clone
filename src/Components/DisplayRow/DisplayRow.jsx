import React from "react";
import SlideShow from "../SlideShow/SlideShow";
import styles from "./DisplayRow.module.css";
import { movies } from "../../Data/Data";
function DisplayRow() {
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="movie suggestions" movie={movies} />
    </div>
  );
}

export default DisplayRow;
