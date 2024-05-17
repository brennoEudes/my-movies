import styled from "styled-components";

export const Container = styled.div`
  main {
    // barra encostada no conteúdo:
    max-width: 114rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    overflow-y: scroll; /* Barra de rolagem vertical */
    padding: 6.4rem 0;
    max-height: 80vh; /* Adjust this value to control the visible height of the content */

    /* Custom scrollbar styles */
    &::-webkit-scrollbar {
      width: 1.2rem; /* Width of the scrollbar */
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) =>
        theme.COLORS.PINK}; /* Color of the scrollbar thumb */
      border-radius: 0.6rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Color of the scrollbar thumb on hover */
    }

    title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        max-width: 20rem;
        height: 4.8rem;
        font-weight: 400;
      }
    }
  }
`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding: 3.2rem;
  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_RED};


  > p {
    text-align: justify;
  }

`;
