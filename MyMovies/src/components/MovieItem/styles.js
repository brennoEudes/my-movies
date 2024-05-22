import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  // background c/ condicional:
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
