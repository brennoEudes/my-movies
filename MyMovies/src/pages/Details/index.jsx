import { Container } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <>
      <Container>
        <Header />
        <h1>Hello, world!</h1>
        <ButtonText title="Voltar"/>
        <Section>
          <Tag title="SciFi" />
          <Tag title="Drama" />
          <Tag title="Family" />
        </Section>
      </Container>
    </>
  );
}
