import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  }

  body {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  button {
    appearance: none;
    background: none;
    border: none;
  }
`;
