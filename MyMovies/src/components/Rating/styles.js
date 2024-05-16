import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 3.6rem;

  > img {
    width: 16rem;
    margin-top: .8rem;
  }
`;
