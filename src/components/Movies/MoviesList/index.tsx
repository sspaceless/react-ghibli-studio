import axios from "axios";
import { FC } from "react";

import { MovieCard } from "../MovieCard";
import { GetMoviesResponse } from "./types";

export const MoviesList: FC = async () => {
  const response = await axios.get<GetMoviesResponse[]>(
    "https://ghibliapi.vercel.app/films",
  );

  const movies = response.data;

  if (!response.data) {
    return <p>Found no movies.</p>;
  }

  const list = movies.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      originalTitle={movie.original_title}
      originalTitleRomanised={movie.original_title_romanised}
      description={movie.description}
      imageUrl={movie.image}
      bannerUrl={movie.movie_banner}
    />
  ));

  return <div className="mt-4 flex flex-col items-center gap-4">{list}</div>;
};
