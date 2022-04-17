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
      paragraph="In our humble small team, we are together. This is the beginning. Staying together is progress. Work is
      success. We have the ability to work with a common vision. We take responsibility for each other and the
      companies we work with equally"   
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