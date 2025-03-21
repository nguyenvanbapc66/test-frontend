import { createGlobalStyle } from 'styled-components';

import resetStyles from './resetStyles';

const GlobalStyles: React.FC = () => {
  return <StyledGlobalStyles />;
};

export default GlobalStyles;

const StyledGlobalStyles = createGlobalStyle`
  ${resetStyles}

  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: #000;
    -webkit-user-drag: none;
    user-select: none;
    overflow: hidden;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }
  
  html, body, #__next, #__next main{
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }

  button{
    cursor: pointer;
    color: white;
    font-size: inherit;
    font-family: inherit;
  }
`;
