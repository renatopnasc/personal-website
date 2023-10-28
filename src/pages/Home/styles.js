import styled from "styled-components";
import { DEVICE_BREAKPONTS } from "../../styles/devicesBreakpoint";

export const Container = styled.div`
  max-width: 70rem;
  height: 100vh;
  margin: 0 auto;

  padding-inline: 3.75rem;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "content";

  > main {
    width: 100%;
    grid-area: content;

    overflow-y: auto;

    &::-webkit-scrollbar {
      background: none;
    }

    .description {
      width: 100%;
      height: 43.75rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      padding-top: 13.75rem;
      padding-bottom: 2.625rem;

      margin-bottom: 6.25rem;

      h2 {
        max-width: 62.5rem;
        font-size: 3.5rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_2};
        line-height: 150%;
        text-align: center;

        span {
          color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
          font-weight: 600;
        }
      }

      button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }

      @media (max-width: ${DEVICE_BREAKPONTS.SM}) {
        & {
          height: 70rem;
          margin-bottom: 9rem;
        }
      }
    }

    .techsContainer {
      width: 100%;

      padding-top: 6.25rem;
      padding-bottom: 8.125rem;

      display: flex;
      flex-direction: column;
      gap: 5rem;

      h2 {
        max-width: 32.5rem;
        font-size: 2.5rem;
        font-weight: 300;
        line-height: 150%;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_2};

        span {
          color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
          font-weight: 600;
        }
      }

      .techs {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;

        > svg {
          transition: all 300ms ease-in-out;
          cursor: pointer;
        }

        .techItem {
          position: relative;
          cursor: pointer;

          color: ${({ theme }) => theme.COLORS.NEUTRAL_2};
        }

        .techCard {
          position: absolute;
          top: -50px; /* Ajuste a posição conforme necessário */
          left: 50%;
          transform: translateX(-50%);
          background: ${({ theme }) => theme.COLORS.NEUTRAL_2};
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 10px;
          border-radius: 4px;
          display: none;

          p {
            color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
          }
        }

        .techItem:hover .techCard {
          display: block;
        }

        .js:hover {
          color: yellow;
        }

        .react:hover {
          color: #00b6f0;
        }

        .node:hover {
          color: #00590d;
        }

        .html:hover {
          color: #d01919;
        }

        .css:hover {
          color: #0086ff;
        }
      }
    }

    .projectsContainer {
      width: 100%;
      padding-top: 5rem;
      padding-bottom: 7.5rem;

      display: flex;
      flex-direction: column;
      gap: 6.25rem;

      > h2 {
        font-weight: 300;
        font-size: 2.5rem;
        line-height: 150%;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_2};

        span {
          font-weight: 600;
          color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
        }
      }

      .projects {
        display: flex;
        flex-direction: column;
        gap: 6.25rem;
      }
    }

    .aboutContainer {
      width: 100%;
      padding-block: 4.625rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        h2 {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 150%;
          color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
          text-transform: uppercase;

          margin-bottom: 1rem;
        }

        p {
          font-weight: 300;
          font-size: 2rem;
          line-height: 150%;
          max-width: 37.25rem;
          color: ${({ theme }) => theme.COLORS.NEUTRAL_2};

          span {
            color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
            font-weight: 600;
          }
        }
      }

      > img {
        max-width: 17.625rem;
        object-fit: cover;
        border-radius: 1rem;
      }

      @media (max-width: ${DEVICE_BREAKPONTS.SM}) {
        flex-direction: column-reverse;
        gap: 2rem;

        div {
          text-align: center;
          margin-top: ;
        }
      }
    }

    .getInTouchContainer {
      width: 100%;

      padding-top: 5rem;
      padding-bottom: 2.5rem;

      > div {
        max-width: 37rem;

        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
          font-size: 3.5rem;
          font-weight: 300;
          color: ${({ theme }) => theme.COLORS.NEUTRAL_2};
          line-height: 150%;
          letter-spacing: -2%;

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

        .cvButton {
          background: transparent;
          border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_2};
          color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
          font-size: 1.5rem;
          margin-top: 2rem;
          padding: 0.5rem 1rem;
          border-radius: 1.5rem;

          cursor: pointer;

          transition: all 300ms ease-in-out;

          &:hover {
            background: ${({ theme }) => theme.COLORS.PRIMARY};
          }
        }

        .social {
          width: 100%;

          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3.5rem;

          margin-top: 3.75rem;

          a {
            color: ${({ theme }) => theme.COLORS.NEUTRAL_2};

            transition: all 100ms ease-in-out;

            &:hover {
              color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
            }
          }
        }
      }
    }
  }
`;
