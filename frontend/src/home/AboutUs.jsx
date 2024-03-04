import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
const AboutUs = () => {
    
  return (
    <div className='bg-[#F5F5F5] flex  flex-col-reverse md:flex-row mt-28 px-4 lg:px-24'>
      {/* right  */}
      
      <img className='w-[32rem] pt-8 md:pt-0 xl:w-[44rem] rounded-lg h-auto bg-center' src="/about.jpg" alt="" />
      
      {/* left  */}
      <div className='md:pl-8 '>
        <h1 className='text-4xl font-[InstrumentSerif] text-[#00261e]  tracking-tight text-center md:text-left  md:text-5xl m-0 pt-4 font-bold uppercase'> 
          About us
        </h1>
        <p className='text-xl  md:text-2xl max-w-4xl py-4 lg:py-8 text-[#282b21] '>
          Creativity, Competence, Compassion and Character 
          are the traits that define us and drive us in our 
          passion to work with small and marginal farmers 
          exposed to vagaries of nature.
        </p> 
        <p className='text-black pb-4 text-sm md:text-base'>
          SAI Sustainable Agro, a social enterprise incorporated in India and USA, 
          is driving a new movement in Asia and Africa by positioning smallholder 
          farmers as valuable partners for agro-industries: catering to the industries’ 
          raw materials need while deriving their own livelihoods from the agroforestry 
          they practice. We aim at achieving development impact along with business success
          by integrating the small/marginal farmers into corporate value chains.
        </p>
        <p className='text-black/75 pb-4 text-sm md:text-base'>          
          In a nutshell: we connect people, create livelihoods and conserve nature!
        </p>
        
        <Link to="/About" 
        onClick={() => {
          setIsMenuOpen(false);
          // smooth scroll to top animation
          document.documentElement.classList.add('scroll-to-top'); 
          window.scrollTo({ top: 0, behavior: 'smooth' }); 
          setTimeout(() => {
              document.documentElement.classList.remove('scroll-to-top'); 
          }, 500);
      }} >
          <button className=' bg-[#00261e] flex justify-center items-center gap-2 text-base text-white font-semibold px-5 py-2 rounded hover:bg-[#41b763] transition-all duration-300'>
            Learn More
            <span className='hover:translate-x-2 transition '>
              <FaArrowRightLong />
            </span> 
          </button>          
                        
        </Link>

      </div>
    </div>
  )
}

export default AboutUs