import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <div className='px-4 pt-28 lg:px-24 flex relative min-h-fit items-center justify-center'>
        
          
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
            className="mySwiper relative overflow-hidden shadow-2xl"
        >
            {/* bg-[#4c504b5d] */}
            {/* <div className=' bg-[#4c504b5d] absolute top-0 rounded-lg z-20 w-full h-full'></div> */}
            <SwiperSlide >
                <img className='w-[380rem] rounded-lg md:h-[84vh] h-auto overflow-hidden' src="/banner1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide >
                <img className='w-[380rem] rounded-lg md:h-[84vh] h-auto overflow-hidden' src="/banner2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide >
                <img className='w-[380rem] rounded-lg md:h-[84vh] h-auto overflow-hidden' src="/banner3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide >
                <img className='w-[380rem] rounded-lg md:h-[84vh] h-auto overflow-hidden' src="/banner4.jpg" alt="" />
            </SwiperSlide>          
            
        </Swiper>
    </div>
  )
}

export default Banner