import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto&family=Ubuntu:wght@300;400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@100;300;400&family=Ubuntu:wght@300;400&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu','Roboto', sans-serif;
    font-size: 14px;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
