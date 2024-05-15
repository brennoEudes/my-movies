import { Container } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export function Details() {
  return (
    <>
      <Container>
        <Header />
        <h1>Hello, world!</h1>
        <Button title="Cadastrar" />
        <Button title="Login" />
        <Button title="Voltar" loading />
      </Container>
    </>
  );
}
