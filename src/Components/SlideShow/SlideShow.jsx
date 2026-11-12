import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";

function SlideShow({ title, movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <section className={styles.slideShow}>
      <h2 className={styles.title}>{title}</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          500: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className={styles.swiper}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SlideShow;
