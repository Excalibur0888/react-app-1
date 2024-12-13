import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import classes from './WorkProcessSwiper.module.css';

import img1 from '../../img/proc1.webp';
import img2 from '../../img/proc2.webp';
import img3 from '../../img/proc3.webp';
import img4 from '../../img/proc4.webp';

function WorkProcessSwiper() {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className={classes.WorkProcessSwiper}>
			<div className={classes.WorkProcessSwiper__container}>
				<h1 className={classes.WorkProcessSwiper__title}>Рабочий процесс</h1>
				<div className={classes.WorkProcessSwiper__arrows}>
					<div ref={prevRef} className={`${classes.WorkProcessSwiper__arrow} ${classes.WorkProcessSwiper__arrowPrev}`}>
					</div>
					<div ref={nextRef} className={`${classes.WorkProcessSwiper__arrow} ${classes.WorkProcessSwiper__arrowNext}`}>
					</div>
				</div>
				<Swiper
					modules={[Navigation]}
					spaceBetween={0}
					loop={true}
					slidesPerView={1}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
					className={classes.WorkProcessSwiper__slider}
				>
					<SwiperSlide>
						<img src={img1} alt="Шаг 1" className={classes.SlideImage} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img2} alt="Шаг 2" className={classes.SlideImage} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img3} alt="Шаг 3" className={classes.SlideImage} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img4} alt="Шаг 4" className={classes.SlideImage} />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default WorkProcessSwiper;
