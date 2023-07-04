import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./SwiperSlider.css";

const SwiperSliderThird = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="h-[400px] w-[500px] max-h-full"
          src="https://i.ibb.co/qBBFbKc/Screenshot-2023-07-04-113331.png"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-[400px] w-[500px] max-h-full"
          src="https://i.ibb.co/CvWvD80/Screenshot-2023-07-04-113353.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col ">
        <img
          className="h-[400px] w-[500px]"
          src="https://i.ibb.co/wgD1m3S/Screenshot-2023-07-04-113410.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[400px] w-[500px] max-h-full"
          src="https://i.ibb.co/6Fd3RDD/Screenshot-2023-07-04-113529.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[400px] w-[500px] max-h-full"
          src="https://i.ibb.co/RvFb1rx/Screenshot-2023-07-04-113509.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[400px] w-[500px] max-h-full"
          src="https://i.ibb.co/Ltc9wgB/Screenshot-2023-07-04-113644.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[400px] w-[500px] max-h-full"
          src="https://i.ibb.co/RB4ZZkp/Screenshot-2023-07-04-113709.png"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSliderThird;
