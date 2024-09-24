import React from "react";
import './HomeReviews.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from '../../../../components/Button'

export default function HomeReviews() {
  const images = Array.from({ length: 5 }, (_, i) => require(`./img/otziv${i + 1}.webp`));

  return (
    <div className="previews__wrapper">
      <div className="previews__title elipse-9 wow slideInRight">
        <span>Наши отзывы ~</span>
        <b>На drive2</b>
      </div>

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
          <SwiperSlide key={index} className="slider-previews__item">
            <span className="dotted-line-1 ms"></span>
            <img src={imgSrc} alt={`Отзыв ${index + 1}`} />
            <span className="dotted-line-2 ms"></span>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="previews__title elipse-10">
        <span>Мы делаем нашу работу</span>
        <b>Качественно</b>
        <div className="button button__reviews">
        </div>
				<br/>
      </div>
			<Button title="Все отзывы" className="HomeReviews__button"/>
    </div>
  );
}
