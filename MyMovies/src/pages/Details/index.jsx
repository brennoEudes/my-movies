import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <>
      <Container>
        <Header />
        <h1>Hello, world!</h1>
        <Section>
          <Tag title="SciFi"/>
          <Tag title="Drama"/>
          <Tag title="Family"/>
        </Section>
      </Container>
    </>
  );
}
