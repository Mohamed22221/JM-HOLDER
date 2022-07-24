import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next';
const Police = () => {
 const { t, i18n } = useTranslation();
 return (
  <MainSectionThre>
   <Container maxWidth="xl">
    <ul>
     <h2>{t("police.title1")}</h2>
     <p>{t("police.line1")}</p>
     <h2>{t("police.title2")}</h2>
     <p>{t("police.line2")}</p>
     <li>{t("police.li1")} </li>
     <li> {t("police.li2")}</li>
     <li>{t("police.li3")}</li>
     <p>{t("police.line3")}</p>
     <h2>{t("police.title3")}</h2>
     <p>{t("police.line4")}</p>
     <li> {t("police.li4")}</li>
     <li> {t("police.li5")}</li>
     <li> {t("police.li6")}</li>
     <p>{t("police.line5")}</p>
     <h2>{t("police.title4")}</h2>
     <p>{t("police.line6")}</p>
     <li> {t("police.li7")}</li>
     <li> {t("police.li8")}</li>
     <li> {t("police.li9")}</li>
     <li> {t("police.li10")}</li>

     <h2>{t("police.title5")}</h2>
     <p>{t("police.line7")}</p>
     <li> {t("police.li11")}</li>
     <li> {t("police.li12")}</li>
     <li> {t("police.li13")}</li>
     <li> {t("police.li14")}</li>
     <li> {t("police.li15")}</li>
     <li> {t("police.li16")}</li>
     <h2>{t("police.title6")}</h2>
     <p>{t("police.line8")}</p>
     <h2>{t("police.title7")}</h2>
     <p>{t("police.line9")}</p>

     <h2>{t("police.title8")}</h2>
     <p>{t("police.line10")}</p>
     <li> {t("police.li17")}</li>
     <li> {t("police.li18")}</li>
     <li> {t("police.li19")}</li>
     <li> {t("police.li120")}</li>
     <h2>{t("police.title9")}</h2>
     <li> {t("police.li21")}</li>
     <li> {t("police.li22")}</li>
     <li> {t("police.li23")}</li>
     <li> {t("police.li24")}</li>
     <h2>{t("police.title10")}</h2>
     <li> {t("police.li25")}</li>
     <li> {t("police.li26")}</li>


    </ul>
   </Container>
  </MainSectionThre>
 )
}
const MainSectionThre = styled.div`
position: relative;
transform: translateY(-70px);
margin: 80px 5px 20px 5px;
color: white;
h2{
 color: var(--primary-color);
}
li{
 margin: 0 30px;
 padding: 5px 0;
}
`
export default Police