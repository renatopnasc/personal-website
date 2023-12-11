import styled from "styled-components";
import { DEVICE_BREAKPONTS } from "../../styles/devicesBreakpoint";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  > img {
    width: 100%;

    object-fit: contain;

    border-radius: 1.6rem;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 1rem;

    h1 {
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 150%;
    }

    .projectDescription {
      font-size: 2rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.NEUTRAL_2};
      line-height: 150%;

      span {
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
      }
    }

    p {
      font-size: 1.125rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.NEUTRAL_2};
    }
  }

  @media (max-width: ${DEVICE_BREAKPONTS.MD}) {
    & {
      display: block;
      position: relative;

      img {
        filter: brightness(0.3);

        &:hover {
          filter: brightness(1);
        }
      }

      div {
        position: absolute;
        bottom: 0;
        padding-inline: 1rem;

        h1 {
          font-size: 1.5rem;
        }

        .projectDescription {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
        }
      }
    }
  }
`;

export const Button = styled.a`
  background: none;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_2};
  border-radius: 10rem;

  color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;

  cursor: pointer;

  padding: 0.5rem 1rem;

  &:hover {
    transition: all 3000ms ease-in-out;

    background: ${({ theme }) => theme.COLORS.PRIMARY};
    border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_1};
  }
`;
