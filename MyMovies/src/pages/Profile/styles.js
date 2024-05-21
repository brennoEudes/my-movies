import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  // Como é um header único na aplicação, não precisa ser um componente:
  > header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_RED};
    display: flex;
    align-items: center;
    padding: 0 12rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2.4rem;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem; // margin negativa sobe o avatar
  width: 18.6rem;
  height: 18.6rem;

  img {
    width: 16.6rem;
    height: 16.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    // ajuste círculo menor em relação ao avatar:
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 34rem;
  margin: 3rem auto 0;

  div:nth-child(3) {
    margin-bottom: 2.4rem;
  }

  .btn-login {
    margin-top: 2.4rem;
  }
`;
