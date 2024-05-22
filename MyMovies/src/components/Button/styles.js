import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 5.6rem;
  
  border: 0;
  padding: 0 1.6rem;
  border-radius: 0.8rem;
  font-weight: 500;

  // quando btn estiver desabilitado:
  &:disabled {
    opacity: 0.5;
  }
`;
