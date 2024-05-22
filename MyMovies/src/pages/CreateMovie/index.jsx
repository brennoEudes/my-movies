import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";

import { Container } from "./styles";

export function CreateMovie() {
  return (
    <>
      <Header />
      <Container>
        <title>
          <ButtonText to="/" title="Back" icon="true" />
          <h1>New Movie</h1>
        </title>
        <main>
          <div className="input-Create-Movie">
            <Input type="text" placeholder="Title" />
            <Input type="number" placeholder="Grade (from 0 to 5)" />
            <TextArea placeholder="Notes" />
          </div>

          <Section title="Tags">
            <div className="section-tags">
              <MovieItem value="React" />
              <MovieItem isNew placeholder="New tag" />
            </div>
          </Section>

          <div className="btns-Create-Movie">
            <Button title="Delete Movie" />
            <Button title="Save" />
          </div>
        </main>
      </Container>
    </>
  );
}
