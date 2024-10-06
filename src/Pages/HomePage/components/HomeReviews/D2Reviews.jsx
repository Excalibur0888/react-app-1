import React from "react";
import './D2reviews.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function D2Reviews() {
  const images = Array.from({ length: 5 }, (_, i) => require(`./img/otziv${i + 1}.webp`));

  return (
    <div className="previews__wrapper">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        centeredSlides={true}
        speed={500}
        spaceBetween={0}
        slidesPerView={3}
        className="slider-previews"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide
            key={index}
            className="slider-previews__item"
          >
            <img src={imgSrc} alt={`Отзыв ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
