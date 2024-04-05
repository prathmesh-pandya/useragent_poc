'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Slider = () => {
  const slider = [
    'https://mcstaging.hnak.com/media/mobilesuite/categoryslider/Ramadan.png',
    'https://mcstaging.hnak.com/media/mobilesuite/categoryslider/Ramadan_1_.png',
    'https://mcstaging.hnak.com/media/mobilesuite/categoryslider/Untitled_design_6_.png',
    'https://mcstaging.hnak.com/media/mobilesuite/categoryslider/Ramadan.png',
    'https://mcstaging.hnak.com/media/mobilesuite/categoryslider/Ramadan_1_.png',
    'https://mcstaging.hnak.com/media/mobilesuite/categoryslider/Untitled_design_6_.png',
  ];
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={3}
      loop={true}
      navigation={{
        nextEl: `#nextEl-blockType`,
        prevEl: `#prevEl-blockType`,
      }}
    >
      {slider.map((item) => {
        return (
          <SwiperSlide>
            <img src={item} />
          </SwiperSlide>
        );
      })}
      <button
        id={`prevEl-blockType`}
        className=' absolute z-40 rotate-180 top-[50%] left-[10px]  w-[40px] h-[35px] '
      >
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 41 32'
          className='fill-green-600 group-hover:fill-primary w-[20px] h-[16px]'
        >
          <title>Previous</title>
          <path d='M40.081 17.414c0.781-0.781 0.781-2.047 0-2.829l-12.728-12.728c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l12.728-12.728zM0 18h38.667v-4h-38.667v4z'></path>
        </svg>
      </button>

      <button
        id={`nextEl-blockType`}
        className='absolute z-40 rotate-180 top-[50%] right-[10px]  w-[40px] h-[35px]'
      >
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 41 32'
          className='fill-green-600 group-hover:fill-primary  w-[20px] h-[16px]'
        >
          <title>Next</title>
          <path d='M40.081 17.414c0.781-0.781 0.781-2.047 0-2.829l-12.728-12.728c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l12.728-12.728zM0 18h38.667v-4h-38.667v4z'></path>
        </svg>
      </button>
    </Swiper>
  );
};

export default Slider;
