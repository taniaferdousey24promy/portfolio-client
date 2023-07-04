import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './SwiperSlider.css';

const SwiperSlider = () => {
    return (
        
            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        
        <SwiperSlide><img className='  h-[400px] w-[500px] max-h-full'  src="https://i.ibb.co/429KNqm/Screenshot-2023-07-04-113249.png" alt="" /></SwiperSlide>

        <SwiperSlide><img className='  h-[400px] w-[500px] max-h-full' src="https://i.ibb.co/TgF3FSn/Screenshot-2023-07-04-113125.png" alt="" /></SwiperSlide>
        <SwiperSlide className='flex flex-col '>
          <img className='  h-[400px] w-[500px]'  src="https://i.ibb.co/8rCXH1y/Screenshot-2023-07-04-113205.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='  h-[400px] w-[500px] max-h-full'  src="https://i.ibb.co/DbyrYYJ/Screenshot-2023-07-04-113138.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='  h-[400px] w-[500px] max-h-full'  src="https://i.ibb.co/pxCyRVM/Screenshot-2023-07-04-113225.png" alt="" /></SwiperSlide>

      
      </Swiper>
      
    );
};

export default SwiperSlider;

