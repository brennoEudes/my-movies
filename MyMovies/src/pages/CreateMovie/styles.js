import styled from "styled-components";

export const Container = styled.div`
  max-width: 114rem;
  margin: 4rem auto;

  title {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    padding-bottom: 4rem;

    h1 {
      font-weight: 400;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    // Barra de rolagem vertical:
    overflow-y: scroll;
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

    .input-Create-Movie {
      display: grid;
      grid-template-areas:
        "Input Input"
        "Textarea Textarea";
      gap: 4rem; /* Espaçamento entre as células */
    }

    .input-Create-Movie TextArea {
      grid-area: Textarea; /* Ocupa toda a linha */
      width: 100%; /* Largura total menos o espaçamento */
    }

    .section-tags {
      display: flex;
      gap: 2.4rem;
      padding: 1.6rem;
      border-radius: 1rem;

      background-color: ${({ theme }) => theme.COLORS.BLACK};
    }

    .btns-Create-Movie {
      display: flex;
      gap: 4rem;

      a:first-child {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`;
