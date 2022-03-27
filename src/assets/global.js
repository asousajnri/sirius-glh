import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px "Poppins", sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    background: #ededed;
  }

  h1, h2, h3, h4 {
    font-weight: bold;
  }
`;

