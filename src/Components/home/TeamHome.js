import { Container } from '@mui/material'
import React from 'react'
import backsection3 from"../../assets/backsection3.jpg"
import styled from 'styled-components'
import SliderTeam from './SliderTeam'
import SliderTeam1 from './SliderTeam1'
import svg from"../../assets/svg.png"
const TeamHome = () => {
  return (
    <StyleTeamHome>
        <Container maxWidth="xl">
            <MainTeamHome>
             <LeftTeamHome data-aos="fade-right">
                 <h1>TEAM</h1>
                 <p>We know that entrepreneurship at its core is an approach to solving problems and risks and striving for
the highest steps of success. We are keen in our mission to the basics of our work
Our mission is to provide an incubator environment for creativity and development, so our team
contributes to creating new job opportunities for entrepreneurs by marketing their entrepreneurial
ideas and contributing to transforming research, experiences and pioneering studies of projects into
practical. prosperous.</p>
            </LeftTeamHome>
            <RightSliderHome>
              <SliderTeam/> 
              <SliderTeam1/> 

            </RightSliderHome>
            </MainTeamHome>
            
        </Container>
    </StyleTeamHome>
  )
}
const StyleTeamHome = styled.div`
position: relative;
background-image: url(${backsection3});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 100%;
transform: translateY(-70px);
z-index: 10;

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
const MainTeamHome = styled.div`

padding: 40px 0;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:750px) {
flex-direction : column ;
align-items: center;
justify-content: center;
}
`
const LeftTeamHome = styled.div`
width: 500px;
h1{
padding:15px 0 ;
}
p{
font-size: 22px;
line-height: 38px;
user-select: none;
}
@media (max-width:750px) {
width: 100%;
}
`
const RightSliderHome = styled.div`
display: flex;
flex-direction: column;
padding: 20px 0;

`




export default TeamHome