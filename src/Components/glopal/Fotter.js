import React from 'react'
import backsection2 from "../../assets/backsection2.jpeg"
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import { Container } from '@mui/material'
import { Link } from "react-router-dom";
const Fotter = () => {
  return (
    <StyleFotter>
      <Container maxWidth="xl">
        <MainFotter>
          <ImgLogo>
            <img src={Logo} />
          </ImgLogo>
          <NavFotter>

            <Link to="/JM-HOLDER" > HOME</Link>
            <Link to="/About" >  ABOUT</Link>
            <Link to="/Team"  >TEAM </Link>
            <Link to='/Portfolio' >PORTFOLIO</Link>
            <Link to='/proposal' >JOBS</Link>
            <Link to='/Jops' >INTERNSHIPS</Link>
            <Link to='/internships' >GIVING BACK</Link>
            <Link to='/givingback' >BLOG</Link>
            <Link to='/Contact' >CONTACT</Link>

          </NavFotter>
          <h4>Join Our NewsLetter</h4>
          <h2>JM HOLDING @2022</h2>
        </MainFotter>
      </Container>
    </StyleFotter>
  )
}
const StyleFotter = styled.footer`
position: absolute;
right: 0;
left: 0;
background-image: url(${backsection2});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 450px;
transform: translateY(-70px);
z-index: 10;
padding: 70px 0;

@media (max-width:800px) {
background-position: top center;
height: 550px;
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
justify-content: center;
h4{
    @media (max-width:550px) {
        margin-top: 60px;
    }

    padding: 40px 0;
}
h2{

    padding: 40px 0;
    color: var(--primary-color);
}
`

const ImgLogo = styled.div`
`
const NavFotter = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
a{
    padding: 8px;
    color: black;
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