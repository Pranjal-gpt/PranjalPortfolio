import React from 'react'
import about from "../assets/about.png"

const About = () => {
  return (
    <>
        <main id="about" className="flex  lg:flex-row flex-col justify-center items-center h-[90vh] mt-10">
        <div className="container h-[80%] w-[80%] text-white flex lg:flex-row flex-col  bg-black shadow-xl  bg-opacity-30 rounded-lg p-5 lg:p-12 items-center justify-center  ">
          <div className="left lg:text-3xl font-bold  lg:w-2/5 ">
            <h1 className='lg:text-left text-center text-xl'>About Me</h1>
            <img src={about} alt="img" />
          </div>

          <div className="About  lg:text-2xl lg:w-2/5 py-10 h-full">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              eius, nulla voluptatibus porro nesciunt at magni beatae
              necessitatibus omnis reprehenderit a sed tempora aut quaerat
              dignissimos ducimus repellat praesentium non.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
