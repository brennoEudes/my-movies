import { GoArrowLeft } from "react-icons/go";
import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <>
        {Icon && <GoArrowLeft />}
        {title}
      </>
    </Container>
  );
}
