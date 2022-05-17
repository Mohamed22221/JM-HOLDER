import React from 'react'
import backsection4 from"../../assets/backsection6.jpg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import { Container } from '@mui/material'
import { motion } from 'framer-motion'

const HeaderShips = () => {
  return (
    <StyleHeaderShips as={motion.div} animate={{ opacity: 1 }}>
      <Container maxWidth="xl">
     <HeaderHome
      Titleh1="JM HOLDING VENTURE ANALYST "
      paragraph="We are true believers in encouraging young adults to accrue as , 
      much practical experience in the job market as possible."   
      /> 
      </Container>
    </StyleHeaderShips>
  )
}
const StyleHeaderShips= styled.div`
opacity: 0;
transition: 0.4s;
position: relative;
background-image: url(${backsection4});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 90vh;
transform: translateY(-70px);
z-index: 10;

@media (max-width:800px) {
background-position: top center;
height: 60vh;
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
button{
    display: none;
}
@media (max-width:900px ) {
    h1{
        font-size: 30px;
    }
}
`

export default HeaderShips