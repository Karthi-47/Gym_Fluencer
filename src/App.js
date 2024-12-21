import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Transformation from "./components/Transformation";
import Reviews from "./components/Reviews";
import Maps from "./components/Maps";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Transformation />
      <Reviews />
      <Maps />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
