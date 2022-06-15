import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'



const TopContactApout = () => {
    const { t, i18n } = useTranslation();

  return (

        <Container maxWidth="xl">
        <StyleTopContact>
        <div className='title'>
        <h2>{t("contact.ContactAboutH1")}</h2>
        </div>
        <div className='main-office'>
        <h2>{t("contact.ContactAboutOffice")}</h2>
        <a href='https://goo.gl/maps/WFXuS2CZdYm26zFf8'>Kuwait-Al Qibla Fahad Al Salem St , Safat Tower 26th Floor</a>
        <a href='tel:22958181'>22958181</a>
        <a href='mailto:info@jmgroupkm.com'>info@jmgroupkm.com</a>
        </div>
        <div className='social'>
        <h2>{t("contact.ContactAboutSocialh1")}</h2>
        <a href='https://instagram.com/jmholding.kw?igshid=YmMyMTA2M2Y=' target="_blank"><FaInstagramSquare className='icon-social'/></a>
        <a href='https://www.linkedin.com/company/jm-holdingkw/' target="_blank"><BsLinkedin className='icon-social'/></a>
        </div>
        </StyleTopContact>
        </Container>

  )
}
const StyleTopContact = styled.div`
height: 200px;
display: flex;
justify-content: space-evenly;
color: white;
@media (max-width:570px) {
justify-content: flex-start;
flex-direction: column;
height: 280px;
}
.title{
width: 450px;
@media (max-width:570px) {
width:100%
}
h2{
    color: var(--primary-color);
    font-size:28px
}

}
.main-office {
    display: flex;
    flex-direction: column;
}
.main-office , .social{

    h2{
        
        color: var(--primary-color);

    }
    a{
        font-size: 14px;
        transition: 0.3s;
        cursor: pointer;
        color: white;
        &:hover{
         color:var(--primary-color) ;
        }
    }
}
.icon-social{
    cursor: pointer;
    font-size: 22px;
    margin: 0 6px;
}

`
export default TopContactApout