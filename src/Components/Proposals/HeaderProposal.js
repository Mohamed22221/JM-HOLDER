import React from 'react'
import backsection7 from"../../assets/backsection7.jpg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import { Container } from '@mui/material'
import { motion } from 'framer-motion'

const HeaderProposal = () => {
  return (
    <StyleHeaderProposal as={motion.div} animate={{ opacity: 1 }}>
    <Container maxWidth="xl">
   <HeaderHome
    Titleh1="APPLY FOR FUNDING"
    paragraph="We offer our clients the most complete and unique open 
    air adventure thrills they have ever experienced complete with
     unforgettable moments. Your safety is our most important mission and 
     for this reason"   
    /> 
    </Container>
  </StyleHeaderProposal>
  )
}
const StyleHeaderProposal = styled.div`
opacity: 0;
transition: 0.4s;
position: relative;
background-image: url(${backsection7});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 90vh;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: top center;
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
export default HeaderProposal