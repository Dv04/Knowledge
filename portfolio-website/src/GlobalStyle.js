import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #121212; /* Dark background */
    color: #fff; /* Light text */
  }
`;

export default GlobalStyle;
