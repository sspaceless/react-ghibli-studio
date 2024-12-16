import { Header } from "~/core/components/header";
import { Movies } from "~/modules/movies/movies.components";
import moviesService from "~/modules/movies/services/movies.service";

const Home = async () => {
  const movies = await moviesService.getMovies();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Header />
      <div className="flex min-h-screen w-full flex-col items-center justify-between md:w-9/12">
        <Movies {...{ movies }} />
      </div>
    </main>
  );
};

export default Home;
