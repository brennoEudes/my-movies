import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import { MdOutlineMailOutline } from "react-icons/md";
import { FiLock, FiUser } from "react-icons/fi";
//import { GoArrowLeft } from "react-icons/go";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <>
      <Container>
        <Form>
          <h1>MyMovies</h1>
          <p>See all my favorite movies.</p>

          <h2>Create your account</h2>
          <Input type="text" placeholder="Name" icon={FiUser} />
          <Input type="text" placeholder="E-mail" icon={MdOutlineMailOutline} />
          <Input type="password" placeholder="Password" icon={FiLock} />

          <Button title="Sign Up" className="btn-login" />

          {/* passamos o "to" aqui p/ rota. O "Link" foi definido lá no componente buttonText */}
          <ButtonText to="/" title="Login" icon="true"></ButtonText>
        </Form>
        <Background />
      </Container>
    </>
  );
}
