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
    max-height: 80vh; /* Adjust this value to control the visible height of the content */

     /* Custom scrollbar styles */
     &::-webkit-scrollbar {
      width: 1.2rem; /* Width of the scrollbar */
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK}; /* Color of the scrollbar thumb */
      border-radius: .6rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Color of the scrollbar thumb on hover */
    }
  }
`;

export const Content = styled.div`
  max-width: 114rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  > p {
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
