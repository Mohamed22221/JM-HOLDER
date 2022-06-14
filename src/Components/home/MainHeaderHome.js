import React from 'react'
import backsection1 from"../../assets/backsection1.jpg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import { motion } from 'framer-motion'
import Button from '../glopal/Button'
import { useTranslation } from 'react-i18next';

const MainHeaderHome = ({}) => {
  const { t, i18n } = useTranslation();

  return (
    <MainHeader as={motion.div} animate={{ opacity: 1 }} >
      <div>
      <HeaderHome 
       Titleh1= {t('titleHeader')} 
       paragraph={t('disHeader')}  
       title="Read more"
       links="/About"
     /> 
       
       </div>
      
    </MainHeader>
 
  )
}

const MainHeader= styled.div`
opacity: 0;
transition:opacity 0.3s;
position: relative;
background-image: url(${backsection1});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 90vh;
width: 100%;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: center center;
height: 90vh;
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
background-color: #00000029;
z-index: -1;
}


`

export default MainHeaderHome