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
import { useEffect, useState } from "react";
import Propisals from "./bages/Propisals";
import Jops from "./bages/Jops";
import InterShips from "./bages/InterShips";
import GivingbBack from "./bages/GivingbBack";
import Terms from "./Components/glopal/Terms";
import './styles/style.css';
import ScrollToTop from './ScrollToTop'
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import Loading from "./Components/glopal/Loading";
// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
  injectStyle();
}


function App() {
  const [loader, setLoader] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    AOS.init({
      duration:1500
    });
  },[])


  // const StyledToastContainer = styled(ToastContainer).attrs({
  //   className: 'toast-container',
  //   toastClassName: 'toast',
  //   bodyClassName: 'body',
  //   progressClassName: 'progress',
  // })`

  //state language
  const { t, i18n } = useTranslation();
  const [Dir , setDir] = useState("ltr")
  const [language , setLang] = useState("en")

  
  return (
    <>
    {loader && <Loading/>}
    <div dir={i18n.language == "en" ? Dir : "rtl"} lang={i18n.language == "en" ? language : "ar"}>
    <Navbar/> 
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="JM-HOLDER" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Team" element={<Team />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="proposal" element={<Propisals />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Jops" element={<Jops />} />
        <Route path="internships" element={<InterShips />} />
        <Route path="givingback" element={<GivingbBack />} />
        <Route path="Terms" element={<Terms />} />
        
        </Routes>

     <Fotter/>
     <ToastContainer progressClassName='progress' autoClose={5000} />
     </div>
     </>
  );
}
const StyleApp = styled.div`

`

export default App;
