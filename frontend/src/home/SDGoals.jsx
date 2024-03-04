import React from 'react'
import { Link } from 'react-router-dom';

const SDGoals = () => {
  return (
    <div className=' mt-16 py-12  px-12 lg:px24'>
        <div className='flex flex-col md:flex-row justify-center gap-12 items-start'>
           <div >
                <img src="/SDG-logo.svg" alt="Promotion hai bhai yaha" className='rounded h-[11rem]' />
                <p className='text-2xl text-[#00261e] pt-4 font-bold capitalize'>impacted so far 
                </p>
            </div> 
            <div className='grid grid-cols-3 gap-2 md:gap-4'>
                <img src="/1.png" alt="Promotion hai bhai yaha" className='rounded w-[11rem]' />
                <img src="/2.png" alt="Promotion hai bhai yaha" className='rounded w-[11rem]' />
                <img src="/3.png" alt="Promotion hai bhai yaha" className='rounded w-[11rem]' />
                <img src="/4.png" alt="Promotion hai bhai yaha" className='rounded w-[11rem]' />
                <img src="/5.png" alt="Promotion hai bhai yaha" className='rounded w-[11rem]' />

            </div>
        </div>

    </div>
  )
}

export default SDGoals