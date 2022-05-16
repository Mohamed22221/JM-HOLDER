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
  @keyframes  ButtonAnimate {
    0%, 100% {
    right: 20px;
    }
    50% {
    right: 24px;
    }
  }
  @keyframes Scale {
    0% {
        transform: scale(0.8)
    }
    100% {
        transform: rotate(1)
    }
  }
body{
  font-family: 'Cairo', sans-serif;
    background-color: white;
     height: calc(100% - 70px );
     width: 100%;
    
}
.loading-css{
  height: 1000px;
}


`

export default GlopalStyle