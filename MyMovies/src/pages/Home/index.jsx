import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { GoPlus } from "react-icons/go";
//import { Rating } from "../../components/Rating";

import { Container } from "./styles";
import { MovieCard } from "../../components/MovieCard";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <title>
          <h1>My Movies</h1>
          <Button title="Add Movie" icon={GoPlus} />
        </title>
        <main>
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </main>
      </Container>
    </>
  );
}
