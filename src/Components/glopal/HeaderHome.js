import React from 'react'

import styled from 'styled-components'
import { Container } from '@mui/material'
import Button from '../glopal/Button'
import { motion } from 'framer-motion'
const HeaderHome = ({Titleh1,paragraph}) => {
  return (

    <Container maxWidth="xl">
    <MainHeader >
    <h1 data-aos="zoom-in" >{Titleh1}</h1>
    <p data-aos="fade-up" >{paragraph}</p>
    <Button title="read more" />
    </MainHeader>
    </Container>
   
  )
}

const MainHeader= styled.div`
position: absolute;
top: 45%;
left: 50%;
transform: translate(-50%,-50%);
justify-content: center;
color: black;
text-align: center;

h1{
  font-size: 30px;
  transition: 0.3s;
  @media (max-width: 550px) {
    font-size: 30px;
  }
}
p{
  transition: 0.3s;
  padding:20px 10px ;
  width:720px;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
}
@media (max-width:900px ) {
  top: 18%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(0);
  padding: 20px 0;
  p{
  width:100%;
  text-align: center;
}
h1{
  font-size: 25px;
}
}


`

export default HeaderHome