import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaXmark,FaBars} from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isSticky,setIsStickey] = useState(false);  

    // toggle menu
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);        
    }
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>100){
                setIsStickey(true);
            }
            else {
                setIsStickey(false);
            }
        }

        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.addEventListener("scroll",handleScroll);
        }
    },[])

    // nav items 
    const navItems=[
        {link:"Home",path:"/home"},
        {link:"About",path:"/about"},
        {link:"Our Team",path:"/team"},
        {link:"Impact",path:"/impact"},
        {link:"Goals",path:"/goals"},
        {link:"Resources",path:"/resources"},
        {link:"Contact Us",path:"/contact"},        
    ]
    return (
    
        <header className='w-full z-20 bg-transparent fixed top-0 left-0 transition-all ease-in duration-300'>
            <nav className={`py-1 lg:px-24 ${isSticky ? "sticky top-0 left-0 right-0 text-[#F5F5F5] bg-[#00261e]":"text-[#5A8D51]"}`}>
                <div className='flex justify-between items-center text-base px-4'>
                    {/* logo */}
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
                          className='text-xl md:text-2xl flex font-bold uppercase items-center gap-2 '>
                       <img src="/logo0.png" className='h-[5rem] w-auto drop-shadow-[0_8px_24px_rgba(255,255,255,.25)]' alt="" /> 
                       <div>
                            <div className=' translate-y-3'>Sai </div>
                            <div >Sustainable </div>
                            <div className=' -translate-y-3'> Agro </div>
                        
                        </div>
                    </Link>
                    {/* nav items for large devices */}
                    <ul className='lg:flex space-x-12 hidden'>
                        {
                            navItems.map(({link,path})=>
                                // <Link key={path} to={path} className='block text-base font-bold text-[#5A8D51] uppercase cursor-pointer hover:text-[#373A2D]'>{link}</Link>
                                <Link key={path} to={path} 
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        // smooth scroll to top animation
                                        document.documentElement.classList.add('scroll-to-top'); 
                                        window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                        setTimeout(() => {
                                            document.documentElement.classList.remove('scroll-to-top'); 
                                        }, 500);
                                    }}  
                                    className={`block text-sm lg:text-base font-bold uppercase cursor-pointer hover:text-[#02da3f] ${isSticky ? "text-[#F5F5F5]":"text-[#5A8D51]"}`}
                                >
                                    {link}
                                </Link>
                            )
                        }
                    </ul>


                    {/* menu button for mobile devices */}

                    <div className='block lg:hidden'>
                        <button onClick={toggleMenu} >
                            { isMenuOpen ? 
                                <FaXmark className={`h-5 w-5 hover:text-[#02da3f] ${isSticky ? "text-[#F5F5F5] bg-[#00261e]":"text-[#5A8D51]"}`} /> : 
                                <FaBars className={`h-5 w-5 hover:text-[#02da3f] ${isSticky ? "text-[#F5F5F5] bg-[#00261e]":"text-[#5A8D51]"}`}  />
                            }
                        </button>
                    </div>                
                </div>
                {/* nav items for sm devices  */}
                <div className={`space-y-4 px-4 mt-24 py-7 bg-[#00261e] ${isMenuOpen ? "block fixed top-0 right-0 left-0": "hidden" }`}>
                    {
                        navItems.map(({link,path})=>
                            <Link 
                                key={path} 
                                to={path} 
                                className='block text-base font-bold text-[#F5F5F5] uppercase cursor-pointer hover:text-[#02da3f]' 
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    // smooth scroll to top animation
                                    document.documentElement.classList.add('scroll-to-top'); 
                                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                                    setTimeout(() => {
                                        document.documentElement.classList.remove('scroll-to-top'); 
                                    }, 500);
                                }} 
                            >
                                {link}
                            </Link>
                        )
                    }
                </div>
            </nav>
        </header>
  
    )
}

export default Navbar