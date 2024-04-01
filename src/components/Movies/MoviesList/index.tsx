import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";

// import { useSelector } from 'react-redux';

// import loadingGif from "../../../assets/ghibli-loading.gif";
import { FC, useCallback, useEffect, useState } from "react";
import { MovieCard } from "..";
import axios from "axios";

type Movie = {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  url: string;
  image: string;
  movie_banner: string;
};

export const MoviesList: FC = async () => {
  // const error = useSelector((state) => state.moviesData.error);
  // const movies = useSelector((state) => state.moviesData.movies);
  // const isLoading = useSelector((state) => state.moviesData.isLoading);

  const response = await axios.get<Movie[]>(
    "https://ghibliapi.vercel.app/films"
  );

  const movies = response.data;

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
      posterUrl={movie.image}
    />
  ));

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10">
        <span>Studio Ghibli</span>
        <span> スタジオジブリ</span>
      </div>
      {list}
    </div>
  );
};
