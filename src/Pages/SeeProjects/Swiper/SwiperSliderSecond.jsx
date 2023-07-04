import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './SwiperSlider.css';

const SwiperSliderSecond = () => {
    return (
        
            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        
        <SwiperSlide><img className='  pt-8  h-[400px] w-[500px] max-h-full'  src="https://i.ibb.co/VMv70x1/Screenshot-2023-07-04-113946.png" alt="" /></SwiperSlide>

        <SwiperSlide><img className='   pt-8  h-[400px] w-[500px] max-h-full' src="https://i.ibb.co/f1zwKLt/Screenshot-2023-07-04-114025.png" alt="" /></SwiperSlide>
        <SwiperSlide className='flex flex-col '>
          <img className='  pt-8  h-[400px] w-[500px]'  src="https://i.ibb.co/9gMj452/Screenshot-2023-07-04-114316.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='  pt-8  h-[400px] w-[500px] max-h-full'  src="https://i.ibb.co/ZYFBs6B/Screenshot-2023-07-04-114113.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='  pt-8  h-[400px] w-[500px] max-h-full'  src="https://i.ibb.co/qY30587/Screenshot-2023-07-04-114212.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='  pt-8  h-[400px] w-[500px] max-h-full'  src="https://i.ibb.co/1dP2YVN/Screenshot-2023-07-04-114248.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='  pt-8  h-[400px] w-[500px] max-h-full'  src="https://i.ibb.co/9TCXxqN/Screenshot-2023-07-04-114332.png" alt="" /></SwiperSlide>

      
      </Swiper>
      
    );
};

export default SwiperSliderSecond;

