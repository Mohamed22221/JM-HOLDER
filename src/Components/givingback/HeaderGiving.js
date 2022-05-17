import React from 'react'
import backsection6 from"../../assets/backsection6.jpg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import { Container } from '@mui/material'
import { motion } from 'framer-motion'
const HeaderGiving = () => {
  return (
    <StyleHeaderAbout as={motion.div} animate={{ opacity: 1 }}>
      <Container maxWidth="xl">
     <HeaderHome
      Titleh1="GIVING BACK"
      paragraph="JM-HOLDING, we are committed to the growth and betterment of where we live and operate. "   
      /> 
      </Container>
    </StyleHeaderAbout>
  )
}
const StyleHeaderAbout = styled.div`
opacity: 0;
transition: 0.4s;
position: relative;
background-image: url(${backsection6});
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
export default HeaderGiving