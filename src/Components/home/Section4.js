import React from 'react'
import backsection5 from"../../assets/backsection5.jpeg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'

const Section4 = () => {
  return (
    <MainSectionFour>
          <HeaderHome
      Titleh1="WE SEE A WORLD IN WHICH EVERY YOUNG PERSON KNOWS THEY ARE"
      paragraph="Faith Capital is committed to investing in the next generation of  entrepreneurs. With this in mind, we have specified certain decision criteria for our investments in order to ensure the maximum likelihood of success."
       title="Submit"
       links="/proposal"   
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
background-position: center center;
height: 100vh;
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


`
export default Section4