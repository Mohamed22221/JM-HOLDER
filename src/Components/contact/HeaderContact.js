import React from 'react'
import backsection12 from"../../assets/backsection12.jpg"
import styled from 'styled-components'
import HeaderHome from '../glopal/HeaderHome'
import { useTranslation } from 'react-i18next'
const HeaderContact = () => {
  const { t, i18n } = useTranslation();
  return (
    <StyleHeaderContact>
          <HeaderHome 
           Titleh1={t("contact.titleContact")}
           paragraph={t("contact.disContact")}
      /> 
    </StyleHeaderContact>
  )
}
const StyleHeaderContact= styled.div`
position: relative;
background-image: url(${backsection12});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 90vh;
transform: translateY(-70px);
z-index: 10;
@media (max-width:800px) {
background-position: top center;
height: 70vh;
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
background-color: #00000030;
z-index: -1;
}
button{
    display: none;
}
`
export default HeaderContact