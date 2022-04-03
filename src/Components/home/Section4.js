import React from 'react'
import backsection5 from"../../assets/backsection5.jpeg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
const Section4 = () => {
  return (
    <MainSectionFour>
          <HeaderHome
      Titleh1="PEOPLE, KNOWLEDGE, VALUES"
      paragraph="We offer our clients the most complete and unique open 
      air adventure thrills they have ever experienced complete with
       unforgettable moments. Your safety is our most important mission and 
       for this reason"   
      /> 
    </MainSectionFour>
  )
}
const MainSectionFour= styled.div`
position: relative;
background-image: url(${backsection5});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 100vh;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: top center;
height: 70vh;
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
background-color: #00000020;
z-index: -1;
}

`
export default Section4