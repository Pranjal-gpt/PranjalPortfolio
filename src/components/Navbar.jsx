import React ,{useState  ,useEffect} from "react";
import { Outlet } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {

  const [menu, setmenu] = useState(false)
  useEffect(() => {
    console.log("bubuangry")
  
    
  }, [menu])
  
  return (
    <>

   
    <nav className="navbar flex justify-between   py-10 lg:px-32 px-5  lg:text-lg fixed font-bold text-white  w-full  ">
      {/* navbar content will go here */}
      <div className="navbar-left">
        <h2 className="lg:text-3xl font-bold ">portfolio</h2>
      </div>
      <div className={`navbar-right   lg:block ${!menu&&"hidden"}`}  >
        <ul className={`nav-links flex lg:gap-16 lg:w-fit w-20 lg:p-0 p-2 rounded lg:translate-x-0 translate-x-28 lg:translate-y-0 translate-y-10 lg:bg-transparent backdrop-blur-md bg-black bg-opacity-50 ${menu&&"flex-col"}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
         
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* {menu?
      :} */}
      <IoIosMenu className="lg:hidden block text-3xl bold  "
      onClick={()=>setmenu(prev=>!prev)}
        />
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
