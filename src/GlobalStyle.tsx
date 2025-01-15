import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
  
  h1,
  h2,
  p,
  div{
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
