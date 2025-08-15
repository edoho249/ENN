import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business" element={<Business />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
