import React from 'react'
import backsection11 from"../../assets/backsection11.jpg"
import styled from 'styled-components'
import { Container } from '@mui/material'
import DataPortFolio from '../glopal/DataPortFolio'


const SectionPortfolio = () => {
  return (
    <StyleSectionPortfolio  >
        <Container maxWidth="xl">
        <h1>Portfolio Companies</h1>
           <MainPorfolio>
               
               {DataPortFolio.map((item)=>{
                   return (
                       <ItemPortFolio key={item.id}>
                           <img src={item.img} />
                       </ItemPortFolio>
                   )
               })
               }
            </MainPorfolio> 

        </Container>
    </StyleSectionPortfolio>
  )
}
const StyleSectionPortfolio= styled.div`

position: relative;
background-image: url(${backsection11});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 100%;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: top center;
height: 100%;
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
background-color: #00000025;
z-index: -1;
}
h1{
    padding-top: 80px;
    color: white;
}

`
const MainPorfolio= styled.div`
display: grid;
grid-template-columns: repeat( auto-fit, minmax(260px, 1fr) );
gap: 30px;
padding: 50px 0;


`
const ItemPortFolio= styled.div`
padding: 50px;
border: 2px solid white;
transition: 0.6s;
position: relative;
::after{
    transition: 0.6s;
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: var(--primary-color);
}
::before{
    transition: 0.6s;
    content: "";
    position: absolute;
    top: 0px;
    left: 20px;
    width: 3px;
    height: 0%;
    background-color: var(--primary-color);
}
&:hover{
    border: 2px solid var(--primary-color);
}
&:hover::after{
   width: 100%;
}
&:hover::before{
   height: 100%;
}
`
export default SectionPortfolio