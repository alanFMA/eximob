import { createGlobalStyle } from 'styled-components';
import XBack from '../assets/x-back.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #000;
    background-image: url(${XBack});
    background-position: center;
    background-repeat: no-repeat;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
  }

  body, input, button {
    font-family: 'Sora', sans-serif;
    font-size: 16px;
  }

  main {
    max-width: 1366px;
    height: 100vh;
  }


  h1, h2, h3 h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
