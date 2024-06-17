import React from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { BrowserRouter, Route,Routes,Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar/>} >
          <Route index element={<Home />} />
          <Route path="/Projects" element={<Projects/>}/>
          
        </Route>
      </Routes>

    

   
    </BrowserRouter>
  );
}

export default App;
