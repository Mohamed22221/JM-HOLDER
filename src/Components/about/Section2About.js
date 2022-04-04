import React from 'react'
import backsection7 from"../../assets/backsection7.jpg"
import styled from 'styled-components'
import { Container } from '@mui/material'


const Section2About = () => {
  return (
    <StyleSection2About>
       
            <MainSection2About>
            <Container maxWidth="xl">
            <h1>AT JM Holding</h1>
            <p>We offer our clients the most complete and unique open air adventure thrills they have  experienced complete with unforgettable moments.  </p>
            <p>We offer our clients the most complete and unique open air adventure thrills they have  experienced complete with unforgettable moments. </p>
            </Container>
            </MainSection2About>
       

    </StyleSection2About>
  )
}
const StyleSection2About = styled.div`

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


`

const MainSection2About = styled.div`
position: absolute;
right: 0;
top: 25%;
transform: translateX(-40%);
@media (max-width: 1400px) {
    transform: translateX(-10%);
}
@media (max-width: 700px) {
   top: 15%;
   right: 0;
   bottom: 0;
   left: 0;
   transform: translateX(0%);

}
h1{
    text-align: center;
}
p{
    width: 550px;
    font-size: 25px;
    padding: 15px 0;
    @media (max-width: 700px) {
    width: 100%;
    font-size: 17px;
    text-align: center;

}
}
`
export default Section2About