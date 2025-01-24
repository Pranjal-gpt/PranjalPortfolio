import React ,{useEffect} from "react";
import Card from "./Card";
import todo from '../assets/todolist.jpeg'
import Bakers from '../assets/bakerskitchens.jpeg'
import spotify from '../assets/spotify.jpeg'
import notesaver from '../assets/notesaver.png'
import { useNavigate } from "react-router-dom";
import elegance from '../assets/elegancejewellery-png.jpg'
import weather from '../assets/weather.jpg'
const Projects = () => {
  
const navigate= useNavigate()
const back= ()=>{
  navigate(-1)
}
useEffect(() => {
 window.scroll(0 , 0)
  
}, [])

  const projects=[
    {
      title:"Elegance Jewellery",
      des:" A user-friendly and secure jewellery e-commerce platform that provides a easy and  enjoyable shopping experience for customers using MERN stack ",
      img:elegance,
      tech:["HTML", "CSS","JS","REACT.JS","NODE.JS","MONGODB","TAILWIND","EXPRESS.JS"],
      github:"https://github.com/Pranjal-gpt/jewellery-ecommerce-website/",
      web:"https://elegance-jewellery.vercel.app/"
    },
    {
      title:"Weather App",
      des:"a dynamic Weather Forecast Application! Using HTML, CSS, and JavaScript, I've developed a user-friendly platform that seamlessly integrates with real-time weather APIs. ",
      img:weather,
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
    {
      title:" NoteSaver",
      des:" Developed NoteSaver a React-based CRUD application for managing and sharing notes. Having a note sharing feature intuitive UI and dynamic functionality to enhance user experience and productivity",
      img:notesaver,
      tech:["HTML", "TAILWIND CSS","JS" ,"REACTJS", "REDUX"],
      github:"https://github.com/Pranjal-gpt/Spotify",
      web:"https://myyspotifyclone.netlify.app/"
    },
  ]
  return (

    <div className="text-white w-full  ">
      <button className="border px-5 rounded-md bg-black absolute top-5 left-5" onClick={back}>back</button>
      <h1 className="font-bold text-3xl ml-20 mt-20">My Projects </h1>
      
        <div className="container mt-10 w-11/12 mx-auto flex  flex-wrap gap-20  ">
         {projects&& projects.map((item)=>
          
         <Card 
            img={item.img}
            title={item.title}
            tech={item.tech}
            desc={item.des}
            github={item.github}
            web={item.web}
          />
         
         )}
        </div>
    </div>
  );
};

export default Projects;
