import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

import { BrowserRouter, Route, Routes, Outlet, createBrowserRouter } from "react-router-dom";

const App = () => {
  
  return (
    <>
      {/* <Navbar/>
     <Home/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />

            
            <Route path="about" element={<About />} />
          </Route>
            <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
