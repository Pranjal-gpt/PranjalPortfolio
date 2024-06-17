import React, { useState } from "react";
import Navbar from "../components/Navbar";
import art from "../assets/home.png";
import { Link } from "react-router-dom";
function Home() {
  const [name,setName] =useState("")
  const [email,setemail] =useState("")
  const [subject,setsubject] =useState("")
  const [msg,setmsg] =useState("")
  const emailto=`mailto:pranjalgupta21088@gmail.com?subject=${subject}&body=${msg}`
  return (
    <>
      <main  id="#" className="flex px-20 gap-0 lg:gap-5 lg:min-h-[60vh] min-h-[55vh] items-center justify-around flex-wrap-reverse">
        <div className="flex flex-col gap-5  lg:w-[46%]">
          <h1 className="text-3xl font-bold ">
            <span className=" text-gray-400">Hi there!</span>
            <br />
            I'm Pranjal,
            <span className="text-indigo-500 block lg:inline-block lg:ml-2">
              {" "}
              A Web Developer
            </span>
          </h1>
          <h3 className="text-xl">
            Hey, glad to see you here! I'm a passionate web developer with expertise in creating dynamic and responsive websites. I specialize in front-end , delivering high-quality, user-friendly solutions to enhance digital experiences. Let's build something amazing together!
          </h3>
          <a
            href="#skills"
            className="border-2 border-indigo-500 rounded-lg  font-bold w-fit p-2 px-4 hover:bg-indigo-200 duration-150"
          >
            {" "}
            Know More
          </a>
        </div>
        <div>
          <img className="w-[600px]" src={"https://img.freepik.com/premium-vector/woman-sitting-table-with-laptop-phone_186332-583.jpg?w=740"} alt="" />
        </div>
      </main>

      <main id="skills" className="flex px-20 gap-0 lg:gap-5 lg:min-h-screen min-h-[60vh] items-center justify-around flex-wrap-reverse flex-col">
        <div className="flex flex-col gap-5  lg:w-[30%] text-center ">
          <h1 className="text-3xl font-bold ">
            <span className=" text-gray-400">My</span>

            <span className="text-indigo-500 lg:ml-2"> Skills</span>
          </h1>
          <h3 className="text-xl ">
            Below are some of the tools and technologies which I am familiar
            with in Web Development.
          </h3>
        </div>
        <div className="flex gap-5 flex-wrap justify-center lg:w-2/3">
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm  hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center">
            <img
              className="w-24 mx-auto"
              src="https://static-00.iconduck.com/assets.00/html-5-icon-726x1024-evem6gg5.png"
              alt="html"
            />
          </div>
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center">
            <img
              className="w-24 mx-auto"
              src="https://static-00.iconduck.com/assets.00/css-3-icon-726x1024-610441pl.png"
              alt="css"
            />
          </div>
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center">
            <img
              className="w-24 mx-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCVQBEuZb3LgGTcO-muTUzsNkf8DBIHZqYg6S5-0NYNKxvy7safziy_-9o7fEN1-pc0k&usqp=CAU"
              alt="js"
            />
          </div>
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center ">
            <img
              className="w-24 mx-auto"
              src="https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png"
              alt="react"
            />
          </div>
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center">
            <img
              className="w-32 mx-auto"
              src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg"
              alt="mongodb"
            />
          </div>
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center">
            <img
              className="w-32 mx-auto"
              src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
              alt="mysql"
            />
          </div>
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center">
            <img
              className="w-32 mx-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCCdLCDhY7mwKXP4bHVQ1SFZxn3pPM2QLFw&s"
              alt="java"
            />
          </div>
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center">
            <img
              className="w-36 mx-auto"
              src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
              alt="git"
            />
          </div>
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center">
            <img
              className="w-36 mx-auto"
              src="https://logowik.com/content/uploads/images/git6963.jpg"
              alt="github"
            />
          </div>
          <div className="border-2 p-2 min-w-40 rounded-lg shadow-sm hover:shadow-indigo-300 hover:shadow-lg duration-500 flex items-center">
            <img
              className="w-32 mx-auto"
              src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg"
              alt=""
            />
          </div>
        </div>
      </main>

      <main  id="projects" className="flex px-20 gap-0 lg:gap-5 lg:min-h-screen min-h-[60vh] items-center justify-around flex-wrap-reverse">
        <div className="flex flex-col gap-5  lg:w-[46%]">
          <h1 className="text-3xl font-bold ">
            <span className=" text-gray-400">My</span>

            <span className="text-indigo-500 lg:ml-2"> Projects</span>
          </h1>
          <h3 className="text-xl">
          Explore my projects to see a showcase of my work, skills, and accomplishments. Click here to discover My Projects and creative designs across various fields and technologies.
          </h3>

          <Link
            to={"/Projects"}
            className="border-2 border-indigo-500 rounded-lg  font-bold w-fit p-2 px-4 hover:bg-indigo-200 duration-150"
          >
            {" "}
            See Projects
          </Link>
        </div>
        <div>
          <img className="w-[600px]" src={"https://img.freepik.com/premium-vector/girl-working-laptop-with-coffee-cup_1005511-582.jpg?w=360"} alt="" />
        </div>
      </main>
      {/* contact section */}
      <main  id="contact" className="flex px-20 gap-0 lg:gap-5 lg:min-h-screen min-h-[60vh] items-center justify-around flex-wrap-reverse">
        <div className="flex flex-col gap-5  lg:w-[46%]">
          
          <br />
          <div>
            <img src="https://img.freepik.com/premium-vector/work-home-concept-design-freelance-working-laptop-her-house-dressed-home-clothes-vector_162862-949.jpg?w=740" alt="" />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 ">
        <h1 className="text-3xl font-bold   text-gray-400 mb-5   text-center ">
            {" "}
            Contact
            <span className=" text-indigo-500"> Me</span>
          </h1>
          <div 
          className="flex flex-col gap-1 ">
            <label htmlFor="name">Name</label>
            <input placeholder="Enter Name" name="name" className="border-2 p-2 rounded-lg border-indigo-600 w-80"
            type="text" value={name}
            onChange={(e)=>{setName(e.target.value)}} />
          </div>
         
          <div className="flex flex-col gap-1 ">
            <label htmlFor="Email">Email</label>
            <input placeholder="Enter Email" name="Email" className="border-2 p-2 rounded-lg border-indigo-600"
            type="text" value={email}
            onChange={(e)=>{setemail(e.target.value)}} />
          </div>
         
          <div className="flex flex-col gap-1 ">
            <label htmlFor="Subject">Subject</label>
            <input placeholder="Enter Subject" name="Subject" className="border-2 p-2 rounded-lg border-indigo-600"
            type="text" value={subject}
            onChange={(e)=>{setsubject(e.target.value)}} />
          </div>
         
          <div className="flex flex-col gap-1 ">
            <label htmlFor="message">message</label>
            
         <textarea   row="3" className="border-2 p-2 rounded-lg border-indigo-600"
            type="text" name="messgae" value={msg} onChange={(e)=>{setmsg(e.target.value)}}id=""></textarea>
          </div>
          <a  href={emailto} className="border-indigo-600 border-2 rounded-md font-bold px-2 py-1 w-fit">Send</a>
          <div className="flex gap-8 text-indigo-600 text-3xl mt-5 justify-center">
          <a  target="_blank" href="https://github.com/Pranjal-gpt"><i class="fa-brands fa-github"></i></a>
          <a  target="_blank" href="https://www.linkedin.com/in/pranjal-gupta-20a093245/"><i class="fa-brands fa-linkedin"></i></a>
          <a  target="_blank" href="mailto:pranjalgupta21088@gmail.com"><i class="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
