import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #121212; /* Dark background */
    color: #f4f4f4; /* Light text */
  }

  h1, h2, h3, p {
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  input, button, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
