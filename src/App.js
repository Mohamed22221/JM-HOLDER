// Routes pages 
import {Routes,Route} from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Fotter from "./Components/glopal/Fotter";
import Home from "./bages/Home";
import About from "./bages/About";
import Team from "./bages/Team";
import Portfolio from "./bages/Portfolio";
import Contact from "./bages/Contact";
import Propisals from "./bages/Propisals";
import Jops from "./bages/Jops";
import InterShips from "./bages/InterShips";
import GivingbBack from "./bages/GivingbBack";
import Terms from "./Components/glopal/Terms";
//global librarys and pages
import { useEffect, useState } from "react";
import Loading from "./Components/glopal/Loading";
import ScrollToTop from './ScrollToTop'
import ScrollTop from "./Components/glopal/ScrollTop";
// librarys
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/style.css';
import Police from "./bages/Police";

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoader(false);
    }, 2800);
    AOS.init({
      duration:1500
    });
  },[])

  //state toggle language En & Ar 
  const { t, i18n } = useTranslation();
  const [Dir ] = useState("ltr")
  const [language ] = useState("en")

  
  return (
    <>
    {loader && <Loading/>}
    <div dir={i18n.language == "en" ? Dir : "rtl"} lang={i18n.language == "en" ? language : "ar"}>
    <Navbar/> 
      <ScrollToTop />
      <ScrollTop />

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
        <Route path="police" element={<Police />} />

        
      </Routes>

     <Fotter/>
     <ToastContainer progressClassName='progress' autoClose={4000} />
     </div>
     </>
  );
}


export default App;
