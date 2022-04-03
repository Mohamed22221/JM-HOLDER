import React, { useState, useRef } from "react";
import { Container } from '@mui/material';
import "./Navbar.css";
import Logo from"../../assets/logo.svg"

const Navbar = () => {
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
  const boxHandler = () => {
    setToggle(false);
  };
  return ( 
    <div className={color ? "main-nav main-nav-color" : "main-nav"}>
    <Container maxWidth="xl">
      <nav>
          <div className="logo">
          <a onClick={boxHandler} href="#Home"  >
          <img src={Logo}/>
            </a>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
        <li>
            
            <a onClick={boxHandler} href="#Home"  >
            HOME
            </a>
          </li>
          <li>
            
            <a onClick={boxHandler} href="#Home"  >
            ABOUT
            </a>
          </li>
          <li>
            
            <a onClick={boxHandler} href="#Home"  >
            TEAM
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href='#About' >
            PORTFOLIO
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Contact">
            PROPOSALS
            </a>
          </li>
          <li>
            <a onClick={boxHandler}  href="#Powerd BY">
            JOBS
            </a>
          </li>
          <li>
            <a onClick={boxHandler}  href="#Powerd BY">
            INTERNSHIPS
            </a>
          </li>
          
          <li>
            <a onClick={boxHandler}  href="#Powerd BY">
            GIVING BACK
            </a>
          </li>
          
          <li>
            <a onClick={boxHandler}  href="#Powerd BY">
            BLOG
            </a>
          </li>
          
          <li>
            <a onClick={boxHandler}  href="#Powerd BY">
            CONTACT
            </a>
          </li>
          
          

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