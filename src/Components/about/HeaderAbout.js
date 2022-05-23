
import React from 'react'
import backsection6 from"../../assets/backsection6.jpg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import { Container } from '@mui/material'
import { motion } from 'framer-motion'
const HeaderAbout = () => {
  return (
    <StyleHeaderAbout as={motion.div} animate={{ opacity: 1 }}>
      <Container maxWidth="xl">
     <HeaderHome
      Titleh1="About"
      paragraph="We offer our clients the most complete and unique open 
      air adventure thrills they have ever experienced complete with
       unforgettable moments. Your safety is our most important mission and 
       for this reason"   
      title="Read more"
       links="/About" 
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
        font-size: 50px;
    }
}
`
export default HeaderAbout