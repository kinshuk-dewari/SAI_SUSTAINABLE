import React from 'react'
import { Footer } from 'flowbite-react';
import { BsFacebook,BsLinkedin, BsTwitterX , BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const PageFooter = () => {
  return (
    <Footer className='rounded-none bg-[#00261e]' >
      <div className="w-full px-4 justify-evenly lg:px-24">
        <div className="grid w-full grid-cols-3 gap-8 px-6 py-8 md:grid-cols-4">
          <div className='text-xl md:text-3xl uppercase font-bold text-[#F5F5F5]'>
                    <Link to="/"
                      onClick={() => {
                        setIsMenuOpen(false);
                        // smooth scroll to top animation
                        document.documentElement.classList.add('scroll-to-top'); 
                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                        setTimeout(() => {
                            document.documentElement.classList.remove('scroll-to-top'); 
                        }, 500);
                      }}  
                      className='text-xl md:text-2xl flex flex-col md:flex-row font-bold uppercase items-center gap-2 '>
                                <img src="/logo0.png" className='h-[5rem] w-auto ' alt="" /> 
                                <div>
                            <div className=' translate-y-3'>Sai </div>
                            <div >Sustainable </div>
                            <div className=' -translate-y-3'> Agro </div>
                        
                        </div>
                    </Link>
            
          </div>
          <div className='flex flex-col text-[#F5F5F5] items-start justify-center gap-4'>
            <h1 className='text-sm md:text-xl hover:cursor-default font-bold uppercase  items-center'>
              Our Companies
            </h1>
            <Link to="/home" onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}   className='text-sm hover:text-[#41b763] text-[#a5a5a5] md:text-xl '>
              SAI Sustainable Agro
            </Link>            
            <a href="/resources" target="_blank"  onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}   className='text-sm hover:text-[#41b763] text-[#a5a5a5] md:text-xl '>
              SAI Tribal Treaditions
            </a>
            <a href="/contact" target="_blank"  onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}   className='text-sm hover:text-[#41b763] text-[#a5a5a5] md:text-xl '>
              SAI International
            </a>
          </div>    
          <div className='flex flex-col text-[#F5F5F5] items-start justify-center gap-4'>
            <h1 className='text-sm md:text-xl hover:cursor-default font-bold uppercase  items-center'>
              about us
            </h1>
            <Link to="/about" onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}  className='text-sm hover:text-[#41b763] text-[#a5a5a5] md:text-xl '>
              About
            </Link>
            <Link to="/team" onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}  className='text-sm hover:text-[#41b763] text-[#a5a5a5] md:text-xl '>
              Our Team
            </Link>
            <Link to="/impact" onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}  className='text-sm hover:text-[#41b763] text-[#a5a5a5] md:text-xl '>
              Impact
            </Link>
          </div>         
          <div className='flex flex-col text-[#F5F5F5] items-start justify-center gap-4'>
            <h1  className='text-sm md:text-xl hover:cursor-default font-bold uppercase  items-center'>
              Pages
            </h1>
            <Link to="/goals" onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}   className='text-sm hover:text-[#41b763] text-[#a5a5a5] md:text-xl '>
              Goals
            </Link>
            <Link to="/resources" onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}   className='text-sm hover:text-[#41b763] text-[#a5a5a5] md:text-xl '>
              Our Resources
            </Link>
            <Link to="/contact" onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}   className='text-sm hover:text-[#41b763] text-[#a5a5a5] md:text-xl '>
              Contact Us
            </Link>
          </div>         
               
          
        </div>
        <div className="w-full rounded-t-lg text-[#F5F5F5] bg-[#14352e] px-4 py-6 sm:flex sm:items-center sm:justify-between">
          
          <div>
            <div>Copyright © 2024 SAI Sustainable Agro</div>
            
          </div>
          <div className='flex  items-center justify-center gap-4'>
            <a href="https://www.facebook.com/SaiSustainable/" target="_blank" className='text-xl md:text-2xl flex font-bold uppercase  items-center'>
              <BsFacebook className=' hover:text-[#02da3f]'/>
            </a>
            <a href="https://www.linkedin.com/company/sai-sustainable-agro-&-rural-development-products-private-limited/" target="_blank" className='text-xl md:text-2xl flex font-bold uppercase  items-center'>
              <BsLinkedin className=' hover:text-[#02da3f]'/>
            </a>
            <a href="https://twitter.com/SaiSustainable" target="_blank" className='text-xl md:text-2xl flex font-bold uppercase  items-center'>
              <BsTwitterX className=' hover:text-[#02da3f]'/>
            </a>
            <a href="https://www.youtube.com/channel/UCfCA8XqJT5eESOehApJPZ_Q" target="_blank" className='text-xl md:text-2xl flex font-bold uppercase  items-center'>
              <BsYoutube className=' hover:text-[#02da3f]'/>
            </a>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default PageFooter
