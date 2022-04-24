import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Wikipedia from "./components/Wiki.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="wiki" element={<Wikipedia />} />
      </Routes>
    </>
    
  );
}

export default App;
