import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Poppins:300,400');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {font-size: 100%;} /*16px*/


body {
  background: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  line-height: 1.75;
  background-color: #143642;
  display:grid;
  place-Items: center;
  min-height: 100vh;

}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 0 ;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}

.app{
  width:min(100%, 1000px);
  display: grid;
  place-items:center;

}

`

export default GlobalStyles
