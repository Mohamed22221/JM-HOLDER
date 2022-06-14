import React from 'react'
import backsection2 from"../../assets/backsection2.jpg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import svg from"../../assets/svg.png"
import { useTranslation } from 'react-i18next';

 
const Section3 = () => {
  const { t, i18n } = useTranslation();
  return (
    <MainSectionThre  >
         <HeaderHome
          Titleh1= {t("headerPoroposal.titleHeaderPoroposal")}
          paragraph={t("headerPoroposal.disHeaderPoroposal")}
          title={t("glopal.readMore")}
        links="/proposal" 
      /> 
    </MainSectionThre>
  )
}
const MainSectionThre= styled.div`

position: relative;
background-image: url(${backsection2});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 100vh;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: center center;
height: 80vh;
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
// button{
//   display: none;
// }

`
export default Section3