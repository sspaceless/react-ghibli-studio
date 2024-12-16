import { Header } from "~/modules/header/header.component";
import { Movies } from "~/modules/movies/movies.components";
import moviesService from "~/modules/movies/services/movies.service";

import Providers from "./providers";

const Home = async () => {
  const movies = await moviesService.getMovies();

  return (
    <>
      <Providers>
        <main className="flex flex-col bg-background p-4 text-foreground">
          <Header />
          <Movies {...{ movies }} />
        </main>
      </Providers>
    </>
  );
};

export default Home;
