import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiCanva, SiGit, SiRedux } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import About from './About'
import Home1 from "..assets/home.png"
// import { FaGithub } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";


const Home = () => {
  console.log("kittu project page")
const [size, setsize] = useState(35)
  return (

    <>
    
    
      <main className="container h-screen lg:w-screen flex  lg:flex-row flex-col justify-evenly items-center pt-24">
        <div className="text text-white  flex  flex-col gap-5  lg:w-2/5 w-11/12 ">
          <h1 className="text-3xl  font-bold "> Hi, I'm Pranjal</h1>
          <p className="lg:text-2xl text-lg  ">
            {" "}
            Hey, glad to see you here! I'm a passionate web developer with
            expertise in creating dynamic and responsive websites. I specialize
            in front-end , delivering high-quality, user-friendly solutions to
            enhance digital experiences. Let's build something amazing together!
          </p>
          <a href="#contact" className="border-2 rounded  bg-black font-bold w-fit p-2 px-4 ">
            Contact Me
          </a>
        </div>
        <div className="logo  lg:w-1/3 w-3/4 ">
          <img src={Home1} alt="img" />
        </div>
      </main>
      <About/>
      
      {/* skills page */}

      <main className="Skills text-white lg:w-screen min-h-[90vh]  flex flex-col gap-5 justify-evenly items-center     lg:px-6">
        <h1 className=" w-full lg:text-3xl text-xl font-bold pl-40">My Skills</h1>

        <div className="   flex lg:flex-row  flex-col-reverse justify-center items-center  box  gap-5 ">
          <p className="lg:text-xl flex flex-col px-3 bg-black shadow-xl h-80 lg:w-2/5 w-11/12 bg-opacity-30 rounded-lg py-6  ">
            Below are some of the tools and technologies which I am familiar
            with in Web Development Explore my projects to see a showcase of my
            work, skills, and accomplishments. Click here to discover My
            Projects and creative designs across various fields and
            technologies..
          <Link className="bg-black w-fit px-5 py-3 rounded-2xl border-2 border-white mt-5 font-bold"   to="/projects" id="projects">My Projects</Link>
          </p>
          <div className="skills-icons   flex flex-wrap lg:w-2/5  items-center justify-center gap-6   box ">
            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <FaHtml5 color="#E34F26" />
            </span>

            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <FaCss3 color="#1572B6" />
            </span>

            {/* Tailwind CSS */}
            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Tailwind CSS"
                className="lg:w-12 w-9 lg:h-12 h-9"
              />
            </span>

            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <FaJs color="#F7DF1E" />
            </span>

            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <FaReact color="#61DAFB" />
            </span>

            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <SiRedux color="#764ABC" />
            </span>

            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <SiMongodb color="#47A248" />
            </span>

            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <FaJava color="#007396" />
            </span>

            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <SiMysql color="#4479A1" />
            </span>

            {/* Canva */}
            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <SiCanva color="#00C4CC" />
            </span>

            {/* Git */}
            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <SiGit color="#F34F29" />
            </span>

            {/* GitHub */}
            <span className="p-5 bg-zinc-950 flex items-center rounded-2xl">
              <FaGithub color="white" />
            </span>
          </div>
        </div>

        {/* </div> */}
      </main>

      <footer id='contact' className="footer lg:h-40 py-5  text-white bg-[#465697] flex justify-evenly items-center lg:px-96  pt-5">
        <div>
          <h1 className="lg:text-5xl font-bold">Contact </h1>
          <h3 className="lg:text-xl">Feel Free To reach out</h3>
        </div>
        <ul className="lg:text-xl flex gap-6">
          <li className="flex gap-1 items-center">  <a href="mailto:pranjalgupta21088@gmail.com" target="_blank"> <MdOutlineEmail size={30 } /> </a></li>
          <li className="flex gap-1 items-center">   <a href="https://www.linkedin.com/in/pranjal-gupta-20a093245/"  target="_blank"> <CiLinkedin size={30}  /></a></li>
          <li className="flex gap-1 items-center">   <a href="https://github.com/Pranjal-gpt"  target="_blank">  <FaGithub  size={30} />  </a></li>
        </ul>
      </footer>
    </>
  );
};

export default Home;
