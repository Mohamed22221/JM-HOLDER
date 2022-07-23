import React, { useState, useRef } from "react";
import { Button, Container } from '@mui/material';
import "./Navbar.css";
import Logo from"../../assets/logo.svg"
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  //change color in scroll
  const [color, setColor] = useState(false);
  const ChangeColor = ()=>{
      if (window.scrollY >= 70) {
        setColor(true)
      }else{
          setColor(false)
      }
  }
  window.addEventListener("scroll" , ChangeColor)
   //mopile phone toggle 
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
   //close navbar
  const boxHandler = () => {
    setToggle(false);
  };
  //toogle language wepsite
  const languageEn = () => {
    {i18n.changeLanguage("en") }
    setToggle(false);
  };
  const languageAR = () => {
    {i18n.changeLanguage("ar")}
    setToggle(false);
  };
  return ( 
    <div className={color ? "main-nav main-nav-color" : "main-nav"}>
     
    <Container maxWidth="xl">
      <nav>
          <div className="logo">
          <NavLink onClick={boxHandler} to="/JM-HOLDER" >
          <img src={Logo}/>
          </NavLink>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
        
          
          <li><NavLink onClick={boxHandler} to='/' >{t('nav.HOME')} </NavLink></li>
          <li> <NavLink onClick={boxHandler} to="/About" >{t('nav.ABOUT')}  </NavLink></li>
         {/* <li><NavLink onClick={boxHandler} to="/Team"  >TEAM </NavLink></li> */}
         {/* <li><NavLink onClick={boxHandler} to='/Portfolio' >PORTFOLIO</NavLink></li>*/}
          <li><NavLink onClick={boxHandler} to='/proposal' >{t('nav.PROPOSALS')}</NavLink></li>
          <li><NavLink onClick={boxHandler} to='/Jops' >{t('nav.JOBS')}</NavLink></li>
          <li><NavLink onClick={boxHandler} to='/internships' >{t('nav.INTERNSHIPS')}</NavLink></li>
          {/*<li><NavLink onClick={boxHandler} to='/givingback' >GIVING BACK</NavLink></li> */}
          <li><NavLink onClick={boxHandler}  to="/Contact">{t('nav.CONTACT')}</NavLink></li>
          {i18n.language == "ar" && <button className="language" onClick={languageEn}> En</button> }
          {i18n.language == "en" && <button className="language" onClick={languageAR}>Ar</button> }
          
          

        </ul>
        <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
          
       
      </nav>
      </Container>
      </div>
  );
};

export default Navbar;