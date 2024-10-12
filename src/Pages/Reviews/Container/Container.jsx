import React from "react";
import classes from "./Container.module.css";
import styles from "../../../styles/NavArrows.module.css";
import Title from "../../../components/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Container() {
  const images = Array.from({ length: 8 }, (_, i) =>
    require(`../img/reviews${i + 1}.webp`)
  );

  return (
    <>
      <Title subtitle="Отзывы" className={classes.reviews__title} />
      <div className={classes.reviews__container}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles.custom_swiper_button_next}`, // Привязка к CSS классу кнопки next
            prevEl: `.${styles.custom_swiper_button_prev}`, // Привязка к CSS классу кнопки prev
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
            <SwiperSlide key={index} className={classes.slider_reviews__item}>
              <img src={imgSrc} alt={`Отзыв ${index + 1}`} />
            </SwiperSlide>
          ))}
          <div className={styles.custom_swiper_button_next}>
            <span></span>
          </div>
        </Swiper>
        <a href="https://www.drive2.ru/" target="_blank" rel="noreferrer">
          Все отзывы с Drive2 можно прочитать здесь
        </a>
        <br />
        <div className={classes.reviews__container__text}>
          <span>Или на Яндекс картах ниже</span>
          <img
            className={classes.reviews__img}
            src={require("../img/yndxrev.png")}
            alt="Yandex 5 rating"
          />
          <img
            className={classes.reviews__img}
            src={require("../img/orig.webp")}
            alt="Yandex"
          />
          <span style={{ marginTop: "60px" }}>Или на Google картах ниже</span>
        </div>
      </div>
    </>
  );
}

export default Container;
