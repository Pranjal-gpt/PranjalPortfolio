import React from "react";
import Projects from "./Projects";
import Bakers from "../assets/bakerskitchens.jpeg";

const Card = ({img,title,desc,tech,github,web}) => {
  
  return (
    <>
       <div className="card w-[410px] h-[470px] bg-[#0C0D19]  rounded-lg p-5 flex flex-col justify-between">
          <div className="flex flex-col gap-1 ">
            <img className="w-full max-h-44 object-cover"  src={img} alt={title} />
            <h1 className=" text-2xl font-bold ">{title}</h1>
            <div className="techs flex  flex-wrap gap-3 ">
             {tech&& tech.map((item)=>
                
              <div className="tech bg-[#465697] rounded-lg px-1  ">
                {item}
              </div>
             )}
              {/* <div className="tech  bg-[#465697] rounded-lg px-1">
                
              </div> */}
              


            </div>
            <p>{desc}</p>
          </div>
            <div className="btns flex justify-start gap-5 ">
              <a href={web} target="_blank">Demo</a>
              <a href={github} target="_blank">Source Code</a>
            </div>

          </div>
         
    </>
  );
};

export default Card;
