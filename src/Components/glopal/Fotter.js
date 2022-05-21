import React, { useState } from 'react'
import backsection2 from "../../assets/backsection2.jpeg"
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import { Container } from '@mui/material'
import { Link } from "react-router-dom";
const Fotter = () => {
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
            <img src={Logo} />
          </ImgLogo>
          <NavFotter>

            
            <Link to="/About" >  ABOUT</Link>
           {/* <Link to="/Team"  >TEAM </Link> */}
          {/*<Link to='/Portfolio' >PORTFOLIO</Link> */}
            <Link to='/proposal' >JOBS</Link>
            <Link to='/Jops' >INTERNSHIPS</Link>
           {/* <Link to='/internships' >GIVING BACK</Link> */}
            
            <Link to='/Contact' >CONTACT</Link>

          </NavFotter>
          
          { Successfully ==false ?
          <div className='center'>
          <h4 onClick={ClickJoinNewsLetter}>Join Our NewsLetter</h4>
          <div className='join'>
            <input type="email" placeholder='Enter your email here' required  />
            <button onClick={SubscribeSuccessfully}>Subscribe</button>
            </div>
          </div> :
          <div className='Successfully'>
            <p>Successfully saved the request.</p>
          </div>
          
          }
          <div className='terms'>
          <h3>JM HOLDING @2022</h3>
          <Link to='/Terms'>Terms and Conditions</Link>
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
background-image: url(${backsection2});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
height: 390px;
transform: translateY(-70px);
z-index: 10;
padding: 70px 0;

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
@media (max-width:750px ) {
  .Successfully p{
  padding-top: 30px;
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
  color: var(--font);
}
input{
  width: 450px;
  border: 2px solid rgba(255, 255, 255, 1);
  border-right:none ;
  
  ::placeholder{
    color: var(--font);
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
    color: black;
  }
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