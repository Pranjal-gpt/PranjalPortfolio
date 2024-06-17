import React, { useEffect } from 'react'
import Project from '../components/Project'
import todo from '../assets/todolist.jpeg'
import Bakers from '../assets/bakerskitchens.jpeg'
import spotify from '../assets/spotify.jpeg'
import Cursor from "react-cursor-follow";

function Projects() {
  useEffect(
    ()=>(window.scroll(0,0)),[])
  const projects=[
    {
      title:"Elegance Jewellery",
      des:" A user-friendly and secure jewellery e-commerce platform that provides a easy and  enjoyable shopping experience for customers using MERN stack ",
      img:"https://i.postimg.cc/xCC1vPyz/elegancejewellery-png.png",
      tech:["HTML", "CSS","JS","REACT.JS","NODE.JS","MONGODB","TAILWIND","EXPRESS.JS"],
      github:"https://github.com/Pranjal-gpt/jewellery-ecommerce-website/",
      web:"https://elegance-jewellery.vercel.app/"
    },
    {
      title:"Weather App",
      des:"a dynamic Weather Forecast Application! Using HTML, CSS, and JavaScript, I've developed a user-friendly platform that seamlessly integrates with real-time weather APIs. ",
      img:"https://i.postimg.cc/pL53RGFm/image.png",
      tech:["HTML", "CSS","JS"],
      github:"https://github.com/Pranjal-gpt/My-weather-app",
      web:"https://pranjal-gpt.github.io/My-weather-app/"
    },
    {
      title:"To Do List",
      des:"Simple To Do List To Manage Every Day Task",
      img:todo,
      tech:["HTML", "CSS","JS"],
      github:"https://github.com/Pranjal-gpt/TodoList",
      web:"https://pranjal-gpt.github.io/TodoList/"
    },
    {
      title:"Baker's Kitchen",
      des:"a frontend for a delightful bakery experience. It's been an incredible journey of learning, from web design fundamentals to creating an immersive online space.",
      img:Bakers,
      tech:["HTML", "CSS","JS"],
      github:"https://github.com/Pranjal-gpt/Bakers-kitchen",
      web:"https://bakers-kitchen.netlify.app/"
    },
    {
      title:" A Spotify Music Player",
      des:"A Music Player having Basic Audio control",
      img:spotify,
      tech:["HTML", "CSS","JS"],
      github:"https://github.com/Pranjal-gpt/Spotify",
      web:"https://myyspotifyclone.netlify.app/"
    },
  ]
  return (
    <div>
     <Cursor  size={10}  color={"#6366F1"} className="z-50"/>

      <h1 className='text-center text-3xl text-gray-500 font-bold mt-10'>My <span className='text-indigo-600'>Projects</span></h1>
      <div className='py-10 flex flex-wrap justify-center items-center  gap-10'>
      {projects.map((item)=>(
        <Project

            img={item.img}
            title={item.title}
            tech={item.tech}
            des={item.des}
            github={item.github}
            web={item.web}
/>
      ))}
       
      </div>
    </div>
  )
}

export default Projects
