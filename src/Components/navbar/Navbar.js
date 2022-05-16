import React, { useState, useRef } from "react";
import { Container } from '@mui/material';
import "./Navbar.css";
import Logo from"../../assets/logo.svg"
import { Link } from "react-router-dom";
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
          <Link onClick={boxHandler} to="/JM-HOLDER" >
          <img src={Logo}/>
          </Link>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
        
          <li><Link onClick={boxHandler} to="/JM-HOLDER" > HOME</Link></li>
          <li> <Link onClick={boxHandler} to="/About" >  ABOUT</Link></li>
          <li><Link onClick={boxHandler} to="/Team"  >TEAM </Link></li>
          <li><Link onClick={boxHandler} to='/Portfolio' >PORTFOLIO</Link></li>
          <li><Link onClick={boxHandler} to='/proposal' >PROPOSALS</Link></li>

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
          
          <li><Link onClick={boxHandler}  to="/Contact">CONTACT</Link></li>
          
          

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