import React from 'react';
import classes from './Container.module.css'
import Title from '../../../components/Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Container() {
	const images = Array.from({ length: 8 }, (_, i) => require(`../img/reviews${i + 1}.webp`));

	return (
		<>
		<Title subtitle="Отзывы" className={classes.reviews__title}/>
			<div className={classes.reviews__container}>
			<Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        centeredSlides={true}
        speed={500}
        spaceBetween={0}
        slidesPerView={1}
        className="slider-reviews"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide
            key={index}
            className="slider-reviews__item"
          >
            <img src={imgSrc} alt={`Отзыв ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
			</div>
		</>
	 );
}

export default Container;