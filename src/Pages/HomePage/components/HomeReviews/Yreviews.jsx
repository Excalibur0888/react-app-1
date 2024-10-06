import React from "react";
import './Yreviews.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function YReviews() {
  const images = Array.from({ length: 5 }, (_, i) => require(`./img/yndx${i + 1}.webp`));

  return (
    <div className="yndx__wrapper">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        centeredSlides={true}
        speed={500}
        spaceBetween={0}
        slidesPerView={3}
        className="slider-yndx"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide
            key={index}
            className="slider-yndx__item"
          >
            <img src={imgSrc} alt={`Отзыв ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
