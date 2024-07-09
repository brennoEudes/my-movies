import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none; // desabilita prop. segurar/arrastar p/ aumentar tamanho da caixa, deixando-a fixa.

  margin-bottom: .8rem;
  border-radius: 1rem;
  padding: 1.6rem;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
