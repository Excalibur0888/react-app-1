import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import classes from './WorkProcessSwiper.module.css';

function WorkProcessSwiper({images, swtitle, classSwiper}) {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className={`${classes.WorkProcessSwiper} ${classSwiper}`}>
			<div className={classes.WorkProcessSwiper__container}>
				<h1 className={classes.WorkProcessSwiper__title}>{swtitle}</h1>
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
					{images.map((img, index) => (
						<SwiperSlide key={index}>
						<img src={require(`../../img/${img}`)} alt={`Шаг ${index}`} className={classes.SlideImage} />
					</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default WorkProcessSwiper;
