import React, { useEffect, useRef } from "react";
import './HomeReviews.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from '../../../../components/Button';

export default function HomeReviews() {
  const images = Array.from({ length: 5 }, (_, i) => require(`./img/otziv${i + 1}.webp`));

  // Используем useRef для создания ссылки на элементы слайдера
  const reviewsRef = useRef([]);

  useEffect(() => {
    const currentReviewsRef = reviewsRef.current; // Копируем текущее значение reviewsRef в переменную

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.setProperty('--delay', `${index * 0.1}s`);

            // Останавливаем наблюдение за элементом, чтобы не анимировать его снова
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // Настройка чувствительности (30% видимости)
    );

    currentReviewsRef.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      currentReviewsRef.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <div className="previews__wrapper">
      <div className="previews__title elipse-9">
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
          <SwiperSlide
            key={index}
            className="slider-previews__item"
            ref={(el) => (reviewsRef.current[index] = el)} // Добавляем ссылку на элемент
          >
            <img src={imgSrc} alt={`Отзыв ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="previews__title elipse-10">
        <span>Мы делаем нашу работу</span>
        <b>Качественно</b>
        <div className="button button__reviews"></div>
        <br/>
      </div>
      <Button title="Все отзывы" className="HomeReviews__button" />
    </div>
  );
}
