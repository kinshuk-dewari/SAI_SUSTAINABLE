import React, { useEffect, useRef, useState } from 'react';
import Genesis from '../components/Genesis'
import Cards from '../components/Cards';
import Managers from '../components/Managers';
import Hero from '../components/Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import LocomotiveScroll from 'locomotive-scroll';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

export const Landing = () => {
    const locomotiveScroll = new LocomotiveScroll();
    const [preLoader,setPreLoader]= useState(true);
    const [timer,setTimer]= useState(3);
    const id = useRef(null);

    const clear=()=>{
        window.clearInterval(id.current);
        setPreLoader(false);
        setTimer(0);
    };
    useEffect(()=>{
        id.current = window.setInterval(()=>{
            setTimer((timer)=>timer-1);
        },1000);
    },[]);
    useEffect(()=>{
        if(timer==-1){ 
            clear();
        }
    },[timer]);
  return (
    <>
        {preLoader ? (
            <div className='absolute  bg-[#11160b] w-full h-full flex flex-col items-center justify-center '>
                <motion.div 
                    initial={{
                        opacity:0,
                        y:100
                    }}
                    animate={{
                        opacity:1,
                        y:0
                    }} 
                    transition={{
                        ease:[0.76, 0, 0.24, 1],
                        duration:1.4
                    }}
                    className='overflow-hidden'
                >
                    <h1 className='text-[#fbf9ef] text-center text-4xl'>SAI SUSTAINABLE AGRO</h1>
                    <div className='flex flex-row pt-2'>
                        <h1 className='text-[#c2c2c2] text-2xl p-2 border-[#5a8d51] border-r-4 capitalize'> connecting people</h1>
                        <h1 className='text-[#c2c2c2] text-2xl p-2  border-[#5a8d51] border-r-4  capitalize'> creating livehoods</h1>
                        <h1 className='text-[#c2c2c2] text-2xl p-2 capitalize'>conserving nature</h1>
                    </div>

                </motion.div>
            </div>
        ):(
            <div data-scroll data-scroll-section data-scorll-speed="-0.8" className='bg-[#fefeff] h-full text-[#fbf9ef]'>
            <Hero />        
            <Cards />
            <Genesis />
            <Managers />
            <div className='py-4 bg-[#11160b] pb-16'>
            <h1 className=' font-[InstrumentSerif]  text-[#fbf9ef] text-center capitalize text-6xl py-12 font-extrabold' >Awards and recognition</h1>
                
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper relative overflow-hidden "
                >
                    <SwiperSlide >
                        <img className='pl-[4rem] pb-8 xl:pl-[26rem] w-auto rounded-lg  h-auto md:h-[66vh] overflow-hidden' src="/awards1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className='pl-[4rem] pb-8  xl:pl-[26rem] w-auto rounded-lg h-auto md:h-[66vh] overflow-hidden' src="/awards2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide  >
                        <img className='pl-[4rem] pb-8   xl:pl-[34rem] rounded-lg md:h-[64vh] h-auto overflow-hidden' src="/awards3.jpg" alt="" />
                    </SwiperSlide>        
                    
                </Swiper>
            </div>
        </div>
        )}
        
    </>
  )
}
