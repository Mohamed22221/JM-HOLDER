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
            </StyleMainContact>
        </Container>

  )
}
const StyleMainContact = styled.div`
height: 650px;
@media (max-width:1000px ) {
  height: 900px;
}

display: flex;
justify-content: space-between;
@media (max-width:1000px) {
  flex-direction: column;
  justify-content: flex-start;
}
`
export default MainContact