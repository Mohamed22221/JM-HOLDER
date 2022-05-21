import React from 'react'
import { Container } from '@mui/material'
import styled from 'styled-components'
import Map from './GoogleMab'
import FormContact from './FormContact'
const MainContact = () => {
  return (
    
        <Container maxWidth="xl">
            <StyleMainContact>
            <FormContact/>
            <Map/>
            </StyleMainContact>
        </Container>

  )
}
const StyleMainContact = styled.div`
height: 600px;
@media (max-width:1000px ) {
  height: 1050px;
}


display: flex;
justify-content: space-evenly;
@media (max-width:1000px) {
  flex-direction: column;
  justify-content: flex-start;
  
}
`
export default MainContact