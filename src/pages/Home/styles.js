import styled from "styled-components";

export const Container = styled.div`
  max-width: 112rem;
  height: 100vh;
  margin: 0 auto;

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
      height: 70rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      padding-top: 22rem;
      padding-bottom: 4.2rem;

      margin-bottom: 10rem;

      h2 {
        max-width: 100rem;
        font-size: 5.6rem;
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
    }

    .techsContainer {
      width: 100%;

      padding-top: 10rem;
      padding-bottom: 13rem;

      display: flex;
      flex-direction: column;
      gap: 8rem;

      h2 {
        max-width: 52rem;
        font-size: 4rem;
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
      padding-top: 8rem;
      padding-bottom: 12rem;

      display: flex;
      flex-direction: column;
      gap: 9.7rem;

      > h2 {
        font-weight: 300;
        font-size: 4rem;
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
        gap: 9.7rem;
      }
    }

    .aboutContainer {
      width: 100%;
      padding-block: 7.4rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        h2 {
          font-size: 2.4rem;
          font-weight: 600;
          line-height: 150%;
          color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
          text-transform: uppercase;

          margin-bottom: 1.6rem;
        }

        p {
          font-weight: 300;
          font-size: 3.2rem;
          line-height: 150%;
          max-width: 59.6rem;
          color: ${({ theme }) => theme.COLORS.NEUTRAL_2};

          span {
            color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
            font-weight: 600;
          }
        }
      }

      > img {
        max-width: 28.2rem;
        object-fit: cover;
        border-radius: 1.6rem;
      }
    }

    .getInTouchContainer {
      width: 100%;

      padding-top: 8rem;
      padding-bottom: 4rem;

      > div {
        max-width: 59.2rem;

        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
          font-size: 5.6rem;
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
          font-size: 1.8rem;
          font-weight: 300;
          color: ${({ theme }) => theme.COLORS.NEUTRAL_2};
        }

        .cvButton {
          background: transparent;
          border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_2};
          color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
          font-size: 2.4rem;
          margin-top: 3.2rem;
          padding: 0.8rem 1.6rem;
          border-radius: 2.4rem;

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
          gap: 5.6rem;

          margin-top: 6rem;

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
