import axios from "axios";

import { Movie } from "../types/movies.type";

class MoviesService {
  async getMovies() {
    return (await axios.get<Movie[]>("https://ghibliapi.vercel.app/films")).data;
  }
}

export default new MoviesService();
