import React from 'react'
import { Link } from 'react-router-dom'
import { LuExternalLink } from "react-icons/lu";
const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scorll-speed=".2" className=' mt-28 lg:px-24 bg-[#11160b] flex flex-col rounded-t-[2rem] items-center justify-center'>
        <h1 className=' font-[InstrumentSerif]  space-y-8 text-center text-4xl pt-[8rem] md:text-5xl m-0 py-8 font-bold uppercase text-[#fbf9ef]'> 
            Our Companies
        </h1>
        
        <div className='grid p-4 md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10'>
            <div data-scroll data-scroll-speed="-0.1"  className='bg-white flex flex-col items-center space-y-2 justify-between rounded-2xl shadow-xl overflow-hidden text-[#11160b]'> 
                <h1 className=' capitalize text-3xl pt-4 p-2 text-[#5A8D51]  font-extrabold'>
                    SAI sustainable agro
                </h1>
              
                <div className='flex flex-col items-center  space-y-4'> 
                    <img  className=" w-[18rem] rounded-2xl h-auto"src="about.jpg" alt="" />
                    <p className='max-w-[18rem] text-lg '>SAI Sustainable Agroforestry model supports small farmers, mitigating farming risks, ensuring income, food security, and raw material supply. It reduces global warming via tree planting and biomass production.</p>
                    
                </div>

                <a href="/home" 
                    onClick={() => {
                        setIsMenuOpen(false);
                        // smooth scroll to top animation
                        document.documentElement.classList.add('scroll-to-top'); 
                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                        setTimeout(() => {
                            document.documentElement.classList.remove('scroll-to-top'); 
                        }, 500);
                    }}  
                    className='font-bold flex items-center justify-center gap-4 w-full text-xl pl-6 p-2 bg-[#5A8D51] hover:bg-[#456b3e] text-[#fbf9ef]'>                        
                    Link to website     
                    <LuExternalLink />                    
                </a> 
            </div>

            <div data-scroll data-scroll-speed="0.2"  className='bg-white flex flex-col items-center space-y-2 justify-between rounded-2xl shadow-xl overflow-hidden text-[#11160b]'> 
                <h1 className=' capitalize text-3xl pt-4 p-2 text-[#5A8D51]  font-extrabold'>
                SAI Tribal Traditions
                </h1>
                
                <div className='flex flex-col items-center pb-4  space-y-4'> 
                    <img  className=" w-[18rem] rounded-2xl h-auto"src="tribal.jpg" alt="" />
                    <p className='max-w-[18rem] text-lg '> 
SAI Tribal Tradition, a new SAI initiative, involves procuring and processing intercropped millet between plantations, creating various food products. Raw materials are sourced from diverse Procurement Groups, including tribal women, offering employment opportunities.</p>
                    
                </div>

                <Link to="/home" 
                    onClick={() => {
                        setIsMenuOpen(false);
                        // smooth scroll to top animation
                        document.documentElement.classList.add('scroll-to-top'); 
                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                        setTimeout(() => {
                            document.documentElement.classList.remove('scroll-to-top'); 
                        }, 500);
                    }}  
                    className='font-bold flex items-center justify-center gap-4 w-full text-xl pl-6 p-2 bg-[#5A8D51] hover:bg-[#456b3e] text-[#fbf9ef]'>                        
                    Link to website     
                    <LuExternalLink />                    
                </Link> 
            </div>

            <div data-scroll data-scroll-speed="-0.1" className='bg-white flex flex-col items-center space-y-2 justify-between rounded-2xl shadow-xl overflow-hidden text-[#11160b]'> 
                <h1 className=' capitalize text-3xl pt-4 p-2 text-[#5A8D51]  font-extrabold'>
                    SAI international
                </h1>
                
                <div className='flex flex-col items-center  space-y-4'> 
                    <img  className=" w-[18rem] rounded-2xl h-auto"src="international.jpg" alt="" />
                    <p className='max-w-[18rem] text-lg '>
In 2017, SEED-Germany lauded SAI Agroforestry as a top eco-inclusive enterprise. With UNDP, UNEP, EU support, SAI expanded into Africa, aiding farmers in Ghana, Uganda, South Africa. By 2019, it globally promoted sustainable food production from its New Jersey base, leveraging digital platforms.</p>
                    
                </div>

                <Link to="/home"
                    onClick={() => {
                        setIsMenuOpen(false);
                        // smooth scroll to top animation
                        document.documentElement.classList.add('scroll-to-top'); 
                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                        setTimeout(() => {
                            document.documentElement.classList.remove('scroll-to-top'); 
                        }, 500);
                    }}  
                    className='font-bold flex items-center justify-center gap-4 w-full text-xl pl-6 p-2 bg-[#5A8D51] hover:bg-[#456b3e] text-[#fbf9ef]'>                        
                    Link to website     
                    <LuExternalLink />                    
                </Link> 
            </div>
            
            
        </div>
          
    </div>
  )
}

export default Cards
