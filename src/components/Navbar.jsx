import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>

    <nav className='flex justify-between px-10 py-8 border-b-2 lg:w-10/12 w-full mx-auto border-black'>
        <div className='name font-bold text-2xl'>
            PranjalGPT
        </div>
        <div className='flex gap-6 text-xl'>
           <a href="/#">Home</a> 
           <a href="/#skills">Skills</a> 
           <a href="/#projects">Projects</a> 
           <a href="/#contact">Contact</a> 

        </div>
        
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar
