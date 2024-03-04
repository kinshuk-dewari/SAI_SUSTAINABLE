import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination} from 'swiper/modules';



const Review = () => {
  return (
    <div className='my-12 py-16  px-4 lg:px-24'>
       <h2 className=' font-[InstrumentSerif] text-4xl md:text-5xl m-0 py-8 font-bold text-center uppercase text-[#00261e]'>Our Partners</h2>
       
      <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper cursor-grab"
        >
          
            <SwiperSlide >
              <a href="http://millets.res.in/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-{3/2} object-contain' src="/partners/1.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide >
              <a href="https://unltdindia.org/social_entrepreneur/jitendra-sinha/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-{3/2} object-contain' src="/partners/2.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide >
              <a href="https://www.jkpaper.com/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-{3/2}  object-contain' src="/partners/3.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide >
              <a href="https://seed.uno/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-{3/2}  object-contain' src="/partners/4.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide >
              <a href="https://nutrihub-tbi-iimr.org/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-{3/2} object-contain' src="/partners/5.jpg" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide >
              <a href="https://www.itcportal.com/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-{3/2} object-contain' src="/partners/6.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide >
              <a href="https://www.trafigurafoundation.org/programmes/sai-india/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-{3/2} object-contain' src="/partners/7.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide >
              <a href="https://www.millersocent.org/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-{3/2}  object-contain' src="/partners/8.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide >
              <a href="https://www.kshitih.org/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-{3/2}  object-contain' src="/partners/9.png" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide >
              <a href="http://www.cdcmp.org.in/" className='cursor-grab' target='_blank'>
                <img className='h-[28rem] aspect-[3/2]  object-contain' src="/partners/10.png" alt="" />
              </a>
            </SwiperSlide>
               
            
        </Swiper>
    </div>
  )
}

export default Review