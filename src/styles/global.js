import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPONTS } from "./devicesBreakpoint";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  *::selection {
    background: #bb3cd8;
  }

  body, button, input-security, textarea {
    font-size: 1rem;
    font-family: 'Work Sans', sans-serif;

    outline: none;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.NEUTRAL_1};
  }

  @media (max-width: ${DEVICE_BREAKPONTS.MD}) {
    :root {
      font-size: 87.5%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPONTS.SM}) {
    :root {
      font-size: 62.5%;
    }
  }

`;
