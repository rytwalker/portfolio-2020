import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.primaryFont};
    transition: all 0.25s linear;
  }
  `
