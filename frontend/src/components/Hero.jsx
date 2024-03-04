import React from 'react'
import {motion} from "framer-motion";
const Hero = () => {
 
  return (
    <div className=' pt-28 p-8 flex relative items-center flex-col justify-center gap-10'>
        {/* <div className='space-y-6'>
            <h1 className='text-black  font-[InstrumentSerif]  capitalize text-6xl font-extrabold' >SAI subtainable agro</h1>
            <div className='flex gap-6 text-2xl'>
                <button className='border capitalize hover:bg-black hover:text-white text-black px-4 p-4 border-black rounded-md'>  get started  </button>
                <button className='capitalize hover:bg-black hover:text-white text-black px-4 p-4 border-black rounded-md'>  learn more  </button>
            </div>
        </div> */}
        <motion.img 
          initial={{width:0}}
          animate={{width:"60rem"}}
          transition={{
            ease:[0.76, 0, 0.24, 1],
            duration:1.4
          }}
        className=" w-[60rem] rounded-2xl h-auto"src="hero.jpg" alt="" />
        <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            ease:[0.76, 0, 0.24, 1],
            duration:1.4
          }}
        >

            <div class="scroll-downs">
              <div class="mousey">
                <div class="scroller"></div>
              </div>
            </div>                
        </motion.div>
        
    </div>
  )
}

export default Hero