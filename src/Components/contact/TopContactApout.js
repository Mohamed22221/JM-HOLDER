import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const TopContactApout = () => {
  return (

        <Container maxWidth="xl">
        <StyleTopContact>
        <div className='title'>
        <h1>We're Ready to Work with You. Get in Touch</h1>
        </div>
        <div className='main-office'>
        <h1>Main Office</h1>
        <a>40 Park Ave, Brooklyn, New York</a>
        <a>1-800-111-2222</a>
        <a>contact@example.com</a>
        </div>
        <div className='social'>
        <h1>social</h1>
        <FacebookIcon className='icon-social'/>
        <LinkedInIcon className='icon-social'/>
        </div>
        </StyleTopContact>
        </Container>

  )
}
const StyleTopContact = styled.div`
height: 200px;
display: flex;
justify-content: space-between;
@media (max-width:570px) {
justify-content: flex-start;
flex-direction: column;
height: 340px;
}
.title{
width: 420px;
@media (max-width:570px) {
width:100%
}
h1{
    
}
}
.main-office {
    display: flex;
    flex-direction: column;
}
.main-office , .social{

    h1{
        font-size: 18px;
        color: var(--primary-color);

    }
    a{
        font-size: 14px;
        transition: 0.3s;
        cursor: pointer;
        &:hover{
         color:var(--primary-color) ;
        }
    }
}
.icon-social{
    cursor: pointer;
}

`
export default TopContactApout