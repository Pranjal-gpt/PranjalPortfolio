import React from 'react'

function Project({img,title,tech,des,github,web}) {
  return (
    <div className=' w-80 p-5 border-2 rounded-md flex flex-col gap-1 shadow-md min-h-96   hover:shadow-indigo-300 hover:shadow-lg duration-500 cursor-pointer hover:-translate-y-5  relative'>
      <img className='w-full h-40  object-cover'src={img} alt={title} />
      <h1 className='font-bold'>{title}</h1>
      <div className='flex gap-1 items-start justify-start flex-wrap'>

      {tech.map((item)=>(
       
      <div className='bg-indigo-100 inline-block w-fit px-1.5 rounded-2xl text-xs shadow-md  '>
        {item}
      </div>
      ))}
      </div>
      <p className='text-sm'>{des}</p>
      <div className='flex gap-3 absolute bottom-2'>
        <a  target="_blank" href={github}><i class="fa-brands fa-github"></i></a>
        <a  target="_blank" href={web}><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
    </div>
  )
}

export default Project
