import React, { useEffect, useState } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { MovieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/RequestUrls";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    async function fetchMovies() {
      try {
        const responses = await Promise.all([
          MovieInstance.get(requests.fetchTrending),
          MovieInstance.get(requests.fetchNetflixOriginals),
          MovieInstance.get(requests.fetchTopRatedMovies),
          MovieInstance.get(requests.fetchActionMovies),
          MovieInstance.get(requests.fetchComedyMovies),
          MovieInstance.get(requests.fetchHorrorMovies),
          MovieInstance.get(requests.fetchRomanceMovies),
          MovieInstance.get(requests.fetchDocumentaries),
        ]);

        setMovies({
          trending: responses[0].data.results ?? [],
          netflixOriginals: responses[1].data.results ?? [],
          topRated: responses[2].data.results ?? [],
          action: responses[3].data.results ?? [],
          comedy: responses[4].data.results ?? [],
          horror: responses[5].data.results ?? [],
          romance: responses[6].data.results ?? [],
          documentaries: responses[7].data.results ?? [],
        });
      } catch (error) {
        console.error("Unable to load movie rows:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix Trending" movies={movies.trending} />
      <SlideShow title="Netflix Originals" movies={movies.netflixOriginals} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
      <SlideShow title="Action" movies={movies.action} />
      <SlideShow title="Comedy" movies={movies.comedy} />
      <SlideShow title="Horror" movies={movies.horror} />
      <SlideShow title="Romance" movies={movies.romance} />
      <SlideShow title="Documentaries" movies={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;
