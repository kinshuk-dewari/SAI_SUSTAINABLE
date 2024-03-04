import { motion } from 'framer-motion'
import React from 'react'

const Managers = () => {
  return (
    <div data-scroll data-scroll-section className='flex h-screen flex-col items-center bg-[#11160b] justify-center'>
            {/* <div className='border-l-2 text-center  w-full'> white</div> */}
            <div className='font-[InstrumentSerif] block overflow-hidden  uppercase font-bold pt-16 text-4xl md:text-5xl p-8'> our managers</div>
            
                <div  className='flex flex-col md:flex-row gap-10 md:gap-[4rem]'>         
                    <motion.div
                    initial={{
                            opacity:0
                           }}
                           transition={{
                            ease:[0.76, 0, 0.24, 1],
                            duration:1.2,
                           }}
                           whileInView={{
                            opacity:1 
                           }}
                           viewport={{once:true}} className='hover:-translate-y-1 overflow-hidden hover:scale-[1.020] rounded-[18px] relative transition ease-in-out delay-150 shadow-lg md:mx-0' >
                        <img className='h-96 w-[22rem]' src="m2.jpg"/> 
                                        
                        <div className='absolute top-[74%] z-10 p-6 text-white flex flex-col'>
                            <p className='font-bold text-xl md:text-2xl capitalize'> Ms Shivangi Pandey</p>
                            <p className='font-semibold text-sm uppercase pb-[.75rem]'>agro forestry</p>
                        </div>
                        <div className='top-[78%] blur-3xl absolute  bg-black p-10 w-full'></div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity:0
                           }}
                           transition={{
                            ease:[0.76, 0, 0.24, 1],
                            duration:1.2,
                           }}
                           whileInView={{
                            opacity:1 
                           }}
                           viewport={{once:true}}
                    className='hover:-translate-y-1 block overflow-hidden hover:scale-[1.020] rounded-[18px] relative transition ease-in-out delay-150 shadow-lg md:mx-0' >
                        <img className='h-96 w-[22rem]' src="m1.jpg"/> 
                                        
                        <div className='absolute top-[74%] z-10 p-6 text-white flex flex-col'>
                            <p className='font-bold text-xl md:text-2xl capitalize'>Ms Damini Thaledi</p>
                            <p className='font-semibold text-sm uppercase pb-[.75rem]'>agri. value chain </p>
                        </div>
                        <div className='top-[78%] blur-3xl absolute  bg-black p-10 w-full'></div>
                    </motion.div>
                </div>             
             
        </div>
  )
}

export default Managers