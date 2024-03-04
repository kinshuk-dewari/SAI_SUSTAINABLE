import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleMember = () => {
  const {name,teamName,designation,imageURL,description} = useLoaderData();
  
  const desc = description;
  return (
    <div className=' mt-36 px-4 lg:px-24'>
      <h1 className='text-5xl py-4 rounded-lg bg-[#005946] text-white font-extrabold text-center'>{teamName}</h1>
      <div className='flex flex-col md:flex-row gap-10 py-10 items-start  justify-around '>
        {/* right side */}
        

        <img className='w-[28rem]  rounded-md shadow-xl' src={`data:image/jpeg;base64,${imageURL}`} />
        {/* left side */}
        <div className='max-w-[42rem] items-start' >
          <h2 className='text-4xl text-[#5A8D51] font-bold'>{name}</h2>
          <h4 className='font-semibold text-xl pb-4 '>{designation}</h4>
          {
           desc.split("*").map((d,key)=> <p key={key} className='pb-2 text-lg xl:text-xl '> 
            <span className={` ${d[0]==" " ?"rounded-full -translate-y-1 inline-block w-2 h-2 bg-[#5A8D51]":"hidden"}`}></span> 
            {d} </p>)
          }
        </div>
        
        </div>
    </div>
  )
}

export default SingleMember