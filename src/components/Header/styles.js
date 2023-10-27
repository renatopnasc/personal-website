import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 2.4rem;

  grid-area: header;

  > h1 {
    font-size: 3.2rem;

    background: ${({ theme }) => theme.COLORS.PRIMARY};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  > nav ul {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    list-style: none;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 150%;

      transition: all 100ms ease-in;

      &:hover {
        background: ${({ theme }) => theme.COLORS.PRIMARY};
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        cursor: pointer;
      }
    }
  }
`;
