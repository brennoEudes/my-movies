import { GoArrowLeft } from "react-icons/go";
import { Container } from "./styles";

export function ButtonText({ title }) {
  return (
    <Container>
      <>
        <GoArrowLeft />
        {title}
      </>
    </Container>
  );
}
