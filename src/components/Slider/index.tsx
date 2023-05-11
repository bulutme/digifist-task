import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import ImageCard from './ImageCard';

const Slider = ({ products }: any) => {
  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <button onClick={() => swiper.slideNext()} className="swiper-button-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    );
  };

  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <button onClick={() => swiper.slidePrev()} className="swiper-button-prev">
        <svg
          style={{ transform: 'rotate(180deg)' }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="product-detail__slider">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          375: {
            slidesPerView: 2.1,
            spaceBetween: 16,
          },
          475: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
          540: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          650: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          920: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1250: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1700: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          2000: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          2300: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
        }}
      >
        <SwiperButtonNext />
        <SwiperButtonPrev />
        {products.map((product: any, index: number) => (
          <SwiperSlide key={index}>
            <ImageCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
