import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import Logo from '../../assets/logo.svg'
const SectionGiving = () => {
  return (
    <StyleGivingBack>
       <Container maxWidth="xl">
         <h1>OUR PARTNERS</h1>
         <div>
         <h1 className='date'>2021</h1>
         <div className='main-partners'> 
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
         </div>
         <h1 className='date'>2020</h1>
         <div className='main-partners'> 
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>

         </div>
         <h1 className='date'>2019</h1>
         <div className='main-partners'> 
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>
          <div className='item-partners'>
            <img src={Logo} />
          </div>


         </div>
         </div>
         
       </Container>
      
    </StyleGivingBack>
  )
}
const StyleGivingBack = styled.div`
position: relative;
height: 100%;
transform: translateY(-70px);
z-index: 10;
padding: 40px 0;
.date{
    text-align: center;
    padding: 10px;
    margin: 10px 0;
    opacity: 0.6;
  }
.main-partners{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  .item-partners{
    position: relative;
    width: 290px;
    height: 150px;
    border: 1px solid black;
    img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50% , -50%);
    }
  }
}
`
export default SectionGiving