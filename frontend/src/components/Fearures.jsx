import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Fearures = () => {
  return (
    <div className='my-12 py-16  px-4 lg:px-24'>
       <h2 className=' font-[InstrumentSerif] text-4xl md:text-5xl m-0 py-12 font-bold text-center uppercase text-[#00261e]'>Featured In</h2>
       <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
        >
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className=' rounded-lg block w-[80%] h-[80%] object-cover ' src="/features/feature0.png" alt="" />                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className=' rounded-lg block w-[80%] h-[80%] object-cover ' src="/features/feature2.png" alt="" />                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className=' rounded-lg block w-[80%] h-[80%] object-cover ' src="/features/feature1.png" alt="" />                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[80%] h-[80%] object-cover  ' src="/features/feature3.png" alt="" />               
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[80%] h-[80%] object-cover  ' src="/features/feature4.jpg" alt="" />                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[80%] h-[80%] object-cover    ' src="/features/feature5.jpg" alt="" />                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[100%] h-[100%] object-cover   ' src="/features/feature6.png" alt="" />                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[100%] h-[100%] object-cover   ' src="/features/feature7.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[100%] h-[100%] object-cover  ' src="/features/feature8.jpg" alt="" />                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[100%] h-[100%] object-cover   ' src="/features/feature9.jpg" alt="" />                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[80%] h-[80%] object-cover   ' src="/features/feature10.jpg" alt="" />
                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[80%] h-[80%] object-cover  ' src="/features/feature11.jpg" alt="" />
               
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[100%] h-[100%] object-cover ' src="/features/feature12.jpg" alt="" />
                
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[100%] h-[100%] object-cover ' src="/features/feature13.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className='text-center flex justify-center items-center pb-12'>
                <img className='  rounded-lg block w-[80%] h-[80%] object-cover' src="/features/feature14.jpg" alt="" />

            </SwiperSlide>
        </Swiper>
      
                
                
    </div>
  )
}

export default Fearures