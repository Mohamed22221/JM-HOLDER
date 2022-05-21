import React from 'react'
import backsection2 from"../../assets/backsection2.jpeg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import svg from"../../assets/svg.png"
const Section3 = () => {
  return (
    <MainSectionThre  >
         <HeaderHome
      Titleh1="WE EMPOWER TOMORROW'S , YOUNG CHANGERS"
      paragraph="First and foremost, we invest in people and teams. We seek out entrepreneurs with passion, focused execution, and tenacious ambitions" 
         
      /> 
    </MainSectionThre>
  )
}
const MainSectionThre= styled.div`

position: relative;
background-image: url(${backsection2});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 100vh;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: center center;
height: 80vh;
}
::after{
content: "";
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #00000029;
z-index: -1;
}
button{
  display: none;
}

`
export default Section3