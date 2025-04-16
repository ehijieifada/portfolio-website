import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
