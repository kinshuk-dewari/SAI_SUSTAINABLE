import React from 'react'
import {FaStar} from 'react-icons/fa6'
// Importing avatar from flow-bite
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profile-image.webp"

const ReviewCard = () => {
  return (
    
            <div className='space-y-6 mx-12 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
                {/* Text  */}
                <div className='mt-7 '>
                  <div className='text-amber-600 flex gap-2'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                  </div>
                    <div className='mt-7'>
                          <p className='mb-5'> Lorem ipsum dolor sit, amet consectetur 
                          adipisicing elit. Molestiae earum voluptates.</p>
                          <Avatar img={proPic} alt="avatar of Jese" rounded 
                          className='w-10 mb-4'
                          />
                          <h5 className='text-lg font-medium'> ABC name</h5>
                          <p className='text-base'>designation, abc company</p>
                          
                     </div>                
                </div>
            </div>
        
  )
}

export default ReviewCard