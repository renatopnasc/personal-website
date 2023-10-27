import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;

  > img {
    width: 100%;
    height: 49rem;

    border-radius: 1.6rem;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 1.6rem;

    h1 {
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 150%;
    }

    .projectDescription {
      font-size: 3.2rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.NEUTRAL_2};
      line-height: 150%;

      span {
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
      }
    }

    p {
      font-size: 1.8rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.NEUTRAL_2};
    }
  }
`;

export const Button = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_2};
  border-radius: 10rem;

  color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 400;
  text-transform: uppercase;

  cursor: pointer;

  padding: 0.8rem 1.6rem;

  &:hover {
    transition: all 3000ms ease-in-out;

    background: ${({ theme }) => theme.COLORS.PRIMARY};
    border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_1};
  }
`;
