import { createGlobalStyle } from "styled-components";


const GlopalStyle = createGlobalStyle`
 :root{
    --primary-color:#C3A461;
    --primary-color-obacity: #416EFF;
    --background-dark-color:  #002087;
    --font: #303030;
    --orange-color: #FF6947;
} 
*{
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Cairo', sans-serif;
    margin: 0;
    padding: 0;
   
}

html {
  scroll-behavior: smooth;
}
@keyframes MoveUpDown {
    0%, 100% {
    transform:translateY(0);
    }
    50% {
      transform:translateY(20px);
    }
  }
  @keyframes  MoveUpDownLeft {
    0%, 100% {
    right: 4rem;
    }
    50% {
    right: 5rem;
    }
  }
  @keyframes Rotate {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
  }
body{
  font-family: 'Cairo', sans-serif;
    background-color: #a3a3a3;
     height: calc(100% - 70px );
     width: 100%;
    ;
}


`

export default GlopalStyle