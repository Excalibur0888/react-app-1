import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/NavArrows.module.css";
import { Navigation } from "swiper/modules";
import classes from "./ReviewsSwiper.module.css";
import "swiper/css";
import "swiper/css/navigation";

function ReviewsSwiper() {
	const images = Array.from({ length: 8 }, (_, i) =>
    require(`../img/reviews${i + 1}.webp`)
  );

	return ( 
		<Swiper
				modules={[Navigation]}
				navigation={{
					nextEl: `.${styles.custom_swiper_button_next}`,
					prevEl: `.${styles.custom_swiper_button_prev}`,
				}}
				loop={true}
				centeredSlides={true}
				speed={500}
				spaceBetween={0}
				slidesPerView={1}
				className={classes.slider__reviews}
			>
				<div className={styles.custom_swiper_button_prev}>
					<span></span>
				</div>
				{images.map((imgSrc, index) => (
					<SwiperSlide key={index} className={classes.slider__reviews__item}>
						<img src={imgSrc} alt={`Отзыв ${index + 1}`} />
					</SwiperSlide>
				))}
				<div className={styles.custom_swiper_button_next}>
					<span></span>
				</div>
			</Swiper>
	 );
}

export default ReviewsSwiper;