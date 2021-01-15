import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: sans-serif
}

body {
    background-color:rgb(24, 24, 24);
    color: white;
}
`;

export default GlobalStyle;