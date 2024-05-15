import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 10.5rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2.4rem 12rem;

  > p {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: bold;
  }
`;

export const Search = styled.div`
  width: 64rem;
  height: 5.3rem;
  display: flex;
  align-items: center;

  padding: 2rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 1rem;

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;
    align-items: end;

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%; /* Macete p/ criar círculo */
  }
`;
