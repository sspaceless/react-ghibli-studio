import { Header } from "@/components";
import { MoviesList } from "@/components/Movies";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between w-9/12">
        <MoviesList />
      </div>
    </main>
  );
};

export default Home;

