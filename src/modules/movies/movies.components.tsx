"use client";

import { useQuery } from "@tanstack/react-query";
import moviesService from "./services/movies.service";
import { QUERY_KEYS } from "~/shared/config/query-keys.const";
import { Movie } from "./types/movies.type";
import { MovieCard } from "./components/movie-card/movie-card.component";

export const Movies: React.FC<{ movies: Movie[] }> = (props) => {
  const { data: movies } = useQuery({
    queryKey: [QUERY_KEYS.MOVIES],
    queryFn: moviesService.getMovies,
    initialData: props.movies,
  });

  if (!movies) {
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
      imageSrc={movie.image}
      bannerSrc={movie.movie_banner}
    />
  ));

  return <div className="mt-4 flex flex-wrap justify-center gap-4">{list}</div>;
};
