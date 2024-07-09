import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
`;
