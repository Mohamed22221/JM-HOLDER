import React from 'react'
import backsection5 from"../../assets/backsection5.jpg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import { useTranslation } from 'react-i18next'

const Section4 = () => {
  const { t, i18n } = useTranslation();
  return (
    <MainSectionFour>
          <HeaderHome
      Titleh1={t("headerJops.titleHeaderheaderJops")}
      paragraph={t("headerJops.disHeaderheaderJops")}
       title={t("glopal.readMore")}
       links = "/Jops"
      /> 
    </MainSectionFour>
  )
}
const MainSectionFour= styled.div`
position: relative;
background-image: url(${backsection5});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 100vh;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: center center;
height: 100vh;
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
export default Section4