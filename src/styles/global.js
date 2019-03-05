import { createGlobalStyle } from 'styled-components';
import { colors, weights } from './var';

// eslint-disable-next-line no-unused-expressions
export const GlobalStyle = createGlobalStyle`
  *{
    font-weight: ${weights.medium};
  }

  body {
    font-family: 'Noto Sans JP', sans-serif;
    margin: 0;
    color: ${colors.black};
  }

  body.hamburger-opened {
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
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
    margin: 0;
    padding: 0;
  }

  p, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;
