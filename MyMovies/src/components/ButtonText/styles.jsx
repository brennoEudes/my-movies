import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
`;
