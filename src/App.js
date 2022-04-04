import Home from "./bages/Home";
import Fotter from "./Components/glopal/Fotter";
import Navbar from "./Components/navbar/Navbar";
import {Routes,Route} from "react-router-dom";
import About from "./bages/About";
function App() {

  
  return (
    <div>
      <Navbar/>
      
      
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Jm-holder" element={<Home/>} />
      <Route path="About" element={<About />} />

    </Routes>
    <Fotter/>
    </div>

  );
}

export default App;
