import React, { useState, useRef } from "react";
import { Button, Container } from '@mui/material';
import "./Navbar.css";
import Logo from"../../assets/logo.svg"
import { Link } from "react-router-dom";
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
          <Link onClick={boxHandler} to="/JM-HOLDER" >
          <img src={Logo}/>
          </Link>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
        
          
          <li><Link onClick={boxHandler} to='/' >{t('nav.HOME')}</Link></li>
          <li> <Link onClick={boxHandler} to="/About" >{t('nav.ABOUT')}  </Link></li>
         {/* <li><Link onClick={boxHandler} to="/Team"  >TEAM </Link></li> */}
         {/* <li><Link onClick={boxHandler} to='/Portfolio' >PORTFOLIO</Link></li>*/}
          <li><Link onClick={boxHandler} to='/proposal' >{t('nav.PROPOSALS')}</Link></li>
          <li><Link onClick={boxHandler} to='/Jops' >{t('nav.JOBS')}</Link></li>
          <li><Link onClick={boxHandler} to='/internships' >{t('nav.INTERNSHIPS')}</Link></li>
          {/*<li><Link onClick={boxHandler} to='/givingback' >GIVING BACK</Link></li> */}
          <li><Link onClick={boxHandler}  to="/Contact">{t('nav.CONTACT')}</Link></li>
          {i18n.language == "ar" && <button className="language" onClick={languageEn}> En</button> }
          {i18n.language == "en" && <button className="language" onClick={languageAR }>Ar</button> }
          
          

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