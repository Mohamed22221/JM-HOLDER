import React from 'react'
import backsection9 from"../../assets/backsection9.jpg"
import styled from 'styled-components'
import SliderTeam from '../home/SliderTeam'
import SliderTeam1 from '../home/SliderTeam1'

import { Container } from '@mui/material'
import { motion } from 'framer-motion'
const SliderAllTeam = () => {
  return (
    <StyleHeaderTeam as={motion.div} animate={{ opacity: 1 }}>
      <Container maxWidth="xl">
        <div className='team'>
        <SliderTeam/>
        <SliderTeam1/>
        </div>

      </Container>
    </StyleHeaderTeam>
  )
}
const StyleHeaderTeam = styled.div`
width: 100%;
display: flex;
align-items: center;
opacity: 0;
transition: 0.4s;
position: relative;
background-image: url(${backsection9});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 90vh;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: top center;
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
background-color: #00000020;
z-index: -1;
}

@media (max-width:900px ) {
    h1{
        font-size: 30px;
    }
}
.team{
  display: flex;
  flex-direction: column;
  align-items: center;
}
`
export default SliderAllTeam