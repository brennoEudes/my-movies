import signInBg from "../../assets/movie-room.svg";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 2.4rem;
    font-weight: bold;
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  .btn-login {
    margin-top: 2.4rem;
    margin-bottom: 4.2rem;
  }
`;

// exportamos como div pois queremos usar a img como bg da div lateral da tela:
export const Background = styled.div`
flex: 1; // ocupa todo o espaço disponível
background: url(${signInBg}) no-repeat center;
background-size: cover;
`;
