import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import { MdOutlineMailOutline } from "react-icons/md";
import { FiLock } from "react-icons/fi";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  return (
    <>
      <Container>
        <Background />{/* Mudei o lado do bg por preferência */}
        <Form>
          <h1>MyMovies</h1>
          <p>See all my favorite movies.</p>

          <h2>Login</h2>
          <Input type="text" placeholder="E-mail" icon={MdOutlineMailOutline} />
          <Input type="password" placeholder="Password" icon={FiLock} />
          <Button title="Enter" className="btn-login" />

          <ButtonText to="/register" title="Create an account" />
        </Form>
      </Container>
    </>
  );
}
