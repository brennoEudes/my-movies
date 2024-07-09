import { Container } from "./styles";
import stars from "../../assets/stars.svg";

export function Rating({ title, ...rest }) {
  return (
    <>
      <Container {...rest}>
        <h2>{title}</h2>
        <img src={stars} alt="stars rating" />
      </Container>
    </>
  );
}
