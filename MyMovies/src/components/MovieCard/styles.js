import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    padding: 3.2rem;
    border-radius: 1.6rem;
    margin-right: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_RED};

    movie-title {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      > img {
        width: 8.4rem;
      }
    }

    > p {
      text-align: justify;

      display: -webkit-box; // A display type that is necessary for the line-clamp feature to work.
      -webkit-line-clamp: 2; // The number of lines to display before truncating.
      -webkit-box-orient: vertical; // Sets the orientation of the box to be vertical.
      overflow: hidden; // Hides the overflowing text.
      text-overflow: ellipsis; // Adds an ellipsis (...) to indicate the text has been truncated.

      height: 4rem; /* Adjust this based on your line-height */
      line-height: 2rem; /* Adjust this based on your line-height */

      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
