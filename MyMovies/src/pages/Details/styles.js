import styled from "styled-components";

// armazena um elemento html (div)
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content; /* Usando o main p/ aplicar região do grid. */
    overflow-y: scroll; /* Barra de rolagem vertical */
    padding: 6.4rem 0;
  }
`;

export const Content = styled.div`
  max-width: 114rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  > p {
    margin-top: 1.6rem;
    text-align: justify;
  }
`;

export const MovieInfo = styled.div`
display: flex;
flex-direction: column;
gap: 2.4rem;
  
`;

export const MovieCreationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%; /* Macete p/ criar círculo */
  }
`;
