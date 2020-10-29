import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        font-family: Apple SD Gothic Neo, Noto Sans KR, sans-serif;
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        background-color: #000000;
    }

    #root {
        height: auto;
    }

    a {
        display: block;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    hr {
        border: none;
        height: 1px;
        width: 100%;
    }

    pre {
        font-family: Apple SD Gothic Neo, Noto Sans KR, sans-serif !important;
        white-space: pre-wrap;
        word-break: break-all;
        margin: 0;
    }

    button {
        border: none;
        padding: 0;
        margin: 0;
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .player-container {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        /* pointer-events: none; */
    }
`;

export default GlobalStyles;
