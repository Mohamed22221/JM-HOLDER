import Home from "./bages/Home";
import Fotter from "./Components/glopal/Fotter";
import Navbar from "./Components/navbar/Navbar";
import {Routes,Route} from "react-router-dom";
import About from "./bages/About";
import styled from 'styled-components'
import Team from "./bages/Team";
import Portfolio from "./bages/Portfolio";
import Contact from "./bages/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    });
  },[])

  
  return (
    <>
    <Navbar/> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="JM-HOLDER" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Team" element={<Team />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
     <Fotter/>
    </>
  );
}
const StyleApp = styled.div`

`

export default App;
