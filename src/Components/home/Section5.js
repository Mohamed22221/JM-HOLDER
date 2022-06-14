import React from 'react'
import backsection6 from"../../assets/backsection6.jpg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import { useTranslation } from 'react-i18next'

const Section5 = () => {
  const { t, i18n } = useTranslation();
  return (
    <MainSectionfife >
          <HeaderHome 
           Titleh1={t("headerInterships.titleHeaderInterships")}
           paragraph={t("headerInterships.disHeaderInterships")}
           title={t("glopal.readMore")}
           links = "/internships"
      /> 
    </MainSectionfife>
  )
}
const MainSectionfife= styled.div`
position: relative;
background-image: url(${backsection6});
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
background-color: #00000002;
z-index: -1;
}


`
export default Section5