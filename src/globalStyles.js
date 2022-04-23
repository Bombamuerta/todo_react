import { createGlobalStyle} from 'styled-components'
// import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    background-image: url(images/bg.png);
    font-size: 12px;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
    font-family: inherit;
  }

  img {
    display: block;
  }

  ul, li {
    list-style: none;
  } 
`