import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes/default";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
  }

  body {
    background-color: ${props => props.theme['light-gray']};
    color: ${props => props.theme['grayish-blue']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Outfit, sans-serif;
  }

  /* - Mobile: 375px
  - Desktop: 1440px */
`