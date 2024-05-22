import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import { MdOutlineMailOutline } from "react-icons/md";
import { FiLock, FiUser, FiCamera } from "react-icons/fi";

import { Container, Avatar, Form } from "./styles";

export function Profile() {
  return (
    <>
      <Container>
        <header>
          <ButtonText to="/" title="Back" icon="true" />
        </header>

        <Form>
          <Avatar>
            <img src="https://github.com/brennoeudes.png" alt="user picture" />
            <label htmlFor="avatar">
              {/* htmlFor vincula o label com o input */}
              <FiCamera />
              <input id="avatar" type="file" />
            </label>
          </Avatar>
          <Input type="text" placeholder="Name" icon={FiUser} />
          <Input type="text" placeholder="E-mail" icon={MdOutlineMailOutline} />
          <Input type="password" placeholder="Current Password" icon={FiLock} />
          <Input type="password" placeholder="New Password" icon={FiLock} />

          <Button title="Save" className="btn-login" />
        </Form>
      </Container>
    </>
  );
}
