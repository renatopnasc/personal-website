import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  :root {
    font-size: 62.5%;
  }

  *::selection {
    background: #bb3cd8;
  }

  body, button, input-security, textarea {
    font-size: 1.6rem;
    font-family: 'Work Sans', sans-serif;

    outline: none;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
  }

  h1, h2, h3, h4, h5, h6, a, p {
    /* background: ${({ theme }) => theme.COLORS.PRIMARY};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; */
  }
`;
