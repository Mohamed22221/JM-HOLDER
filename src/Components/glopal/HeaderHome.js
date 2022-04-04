import React from 'react'

import styled from 'styled-components'
import { Container } from '@mui/material'
import Button from '../glopal/Button'
const HeaderHome = ({Titleh1,paragraph}) => {
  return (

    <Container maxWidth="xl">
    <MainHeader>
    <h1>{Titleh1}</h1>
    <p>{paragraph}</p>
    <Button title="read more"/>
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
  font-size: 50px;
}
p{
  padding:20px 0 ;
  width:720px;
  text-align: center;
  font-size: 18px;
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