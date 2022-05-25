import React from 'react'

import styled from 'styled-components'
import { Container } from '@mui/material'
import Button from '../glopal/Button'

const HeaderHome = ({Titleh1,paragraph,title,links}) => {
  return (

    <Container maxWidth="xl">
    <MainHeader >
    <h1 data-aos="zoom-in" >{Titleh1}</h1>
    <p data-aos="fade-up" >{paragraph}</p>
    <Button  title={title} links={links} />
    </MainHeader>
    </Container>
   
  )
}

const MainHeader= styled.div`
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%,-50%);
justify-content: center;
color: #FFF;
text-align: center;

h1{
  text-align: center;
  font-size: 30px;
 
  transition: 0.3s;
  @media (max-width: 550px) {
    font-size: 28px;
  }
}
p{
  transition: 0.3s;
  padding:20px 30px ;

  text-align: center;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
@media (max-width:900px ) {
  top: 50%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
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