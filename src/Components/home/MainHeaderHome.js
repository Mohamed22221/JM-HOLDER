import React from 'react'
import backsection1 from"../../assets/backsection1.jpeg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import { motion } from 'framer-motion'
const MainHeaderHome = ({}) => {
  return (
    <MainHeader as={motion.div} animate={{ opacity: 1 }}>
      <HeaderHome 
      Titleh1="PEOPLE, KNOWLEDGE, VALUES"
      paragraph="We offer our clients the most complete and unique open 
      air adventure thrills they have ever experienced complete with
       unforgettable moments. Your safety is our most important mission and 
       for this reason"   
      /> 
       
    </MainHeader>
 
  )
}

const MainHeader= styled.div`
opacity: 0;
transition:opacity 0.3s;
position: relative;
background-image: url(${backsection1});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 90vh;
width: 100%;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: center center;
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
background-color: #00000029;
z-index: -1;
}

`

export default MainHeaderHome