import React, { useState } from 'react'
import styled from 'styled-components'
import Logo1 from '../../assets/logo.svg'
import pdfAr from "../../assets/AMLPOLICYARABIC.pdf"
import pdfEN from "../../assets/AMLPOLICYENGLISH.pdf"

import { Container } from '@mui/material'
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Fotter = () => {
  const { t, i18n } = useTranslation();

  const [join , setJoin] = useState(false)
  const [Successfully , setSuccessfully] = useState(false)
  const ClickJoinNewsLetter = () =>{
    setJoin(true)
  }
  const SubscribeSuccessfully = () =>{
    setSuccessfully(true)
    setJoin(false)
  }
  return (
    <StyleFotter>
      <Container maxWidth="xl">
        <MainFotter join={join}>
          <ImgLogo>
          <NavLink  to="/JM-HOLDER" > <img src={Logo1} /></NavLink>
          </ImgLogo>
          <NavFotter>

            
            <NavLink to="/About" >{t("fotter.about")}</NavLink>
           {/* <NavLink to="/Team"  >TEAM </NavLink> */}
            {/*<NavLink to='/Portfolio' >PORTFOLIO</NavLink> */}
            <NavLink to='/proposal' >{t("fotter.proposals")}</NavLink>
            <NavLink to='/Jops' >{t("fotter.jops")}</NavLink>
            <NavLink to='/internships' >{t("fotter.internships")}</NavLink> 
            <NavLink to='/Contact' >{t("fotter.contact")}</NavLink>

          </NavFotter>
          
          { Successfully ==false ?
          <div className='center'>
          <h4 onClick={ClickJoinNewsLetter}>{t("fotter.join")}</h4>
          <div className='join'>
            <input type="email" placeholder={t("fotter.placeholder")} required  />
            <button onClick={SubscribeSuccessfully}>{t("fotter.subscribe")}</button>
            </div>
          </div> :
          <div className='Successfully'>
            <p>{t("fotter.successfully")}</p>
          </div>
          
          }
          <div className='terms'>
          <a href={i18n.language==="en" ? pdfEN : pdfAr} target="_blank" >{t("fotter.police")}</a>
          <NavLink to='/Terms'>{t("fotter.terms")}</NavLink>
          </div>
        </MainFotter>
      </Container>
    </StyleFotter>
  )
}
const StyleFotter = styled.footer`
position: absolute;
right: 0;
left: 0;
background-color: var(--font);
height: 390px;
transform: translateY(-70px);
z-index: 10;
padding: 70px 0;
a.active {
 color: var(--primary-color);

}
a.active::after{
  background-color: var(--primary-color);
  width: 100%;
 }
@media (max-width:800px) {
background-position: top center;
height: 450px;
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
background-color: #00000010;
z-index: -1;
}

`
const MainFotter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
h4{
  cursor: pointer;
  padding: 10px 0;
  color: white;
    @media (max-width:550px) {
        margin-top: 10px;
    }


}
h3{
    font-size: 14px;
    padding: 10px 0;
    color: var(--primary-color);

}
.center{
  text-align: center;
}
.Successfully p{
   color: white;
   @media (max-width:750px ) {
  .Successfully p{
  padding-top: 30px;
 
}
}

}

.join{
  display:  ${props => props.join ? "block" : "none "};
   padding: 10px 0;
input,button{
  padding: 5px 14px;
  background-color: transparent;
  font-weight: bold;
  font-size: 17px;
  color: white;
}
input{
  width: 450px;
  border: 2px solid rgba(255, 255, 255, 1);

  
  ::placeholder{
    color: white;
  }
  @media (max-width:750px) {
    width: 200px;
  }
}
button{
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.9);
  transition: 0.4s;
  background-color: var(--primary-color);
  
  &:hover{
    opacity: 0.8;
    
  }
}
}
.terms{
  display: flex;
  align-items: center;
  border-top: 1px solid var(--font) ;
  justify-content: center;
  flex-wrap: wrap;
  h3,a{
    margin: 1px 20px;
  }
  a{
    font-size: 14px;
    color: #FFF;
  }
}
`

const ImgLogo = styled.div`
img{
  
 
  width: 180px;
}
`
const NavFotter = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
a{
    padding: 8px;
    color: #FFF;
    font-weight: 600;
    font-size: 14px;
    transition: 0.5s;
    position: relative;
    &::after{
  content: "";
  position :absolute ;
  background-color: var(--primary-color);
  transition: 0.5s;
  left: 0;
  bottom:  0;
  right: 0;
  left: 0;
  width:0%;
  height: 7%;
  overflow: hidden;
  color: white;
  z-index: 0;

  }
  &:hover::after{
 
 color: white;
 width: 95%;
 z-index: -1;
   
 }
    &:hover{
      color: var(--primary-color);
      
    }

}
`
export default Fotter