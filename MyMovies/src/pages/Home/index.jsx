import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
//import stars from "../../assets/stars.svg";
import { GoPlus } from "react-icons/go";

//import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

import { Container, Content, MovieTitle, TagsGroup } from "./styles";
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
