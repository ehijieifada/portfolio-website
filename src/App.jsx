import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20">
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
      </main>
    </div>
  );
};

export default App;
