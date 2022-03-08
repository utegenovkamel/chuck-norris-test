import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  html {
    box-sizing: border-box;
    font-size: 100%;
    line-height: 1.5;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 0;
  }

  body {
    color: white;
    font-family: 'Gilroy', 'Arial', sans-serif;
    font-weight: bold;
    min-width: 320px;
    background-color: ${(props) => props.theme.palette.secondary[300]};
  }

  @font-face {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: normal;
    src: url('assets/fonts/Gilroy-Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: bold;
    src: url('assets/fonts/Gilroy-ExtraBold.otf') format('opentype');
  }
`
