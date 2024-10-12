import React, { useRef } from "react";
import classes from './Contacts.module.css';
import styles from '../../styles/NavArrows.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import contacts from './contactsData';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Contacts() {
  const images = Array.from({ length: 8 }, (_, i) => require(`./img/person${i + 1}.webp`));

  // Рефы для кнопок
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={classes.contacts__container}>
      <Swiper
        slidesPerView={3}
        loop={true}
        speed={400}
        modules={[Navigation]}
        className={classes.contacts_swiper}
        onInit={(swiper) => {
          // Инициализация навигации после того, как Swiper будет готов
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <div ref={prevRef} className={styles.custom_swiper_button_prev} style={{ left: '0', top: '40%' }}>
          <span></span>
        </div>

        {contacts.map((contact, index) => (
          <SwiperSlide key={index} className={classes.contacts_slide}>
            <div className={classes.contacts__item}>
              <div
                className={classes.contacts__image}
                style={{ backgroundImage: `url(${images[index]})` }}
              ></div>
              <div className={classes.contacts__name}>{contact.name}</div>
              <p className={classes.contacts__description}>
                {contact.description.split('/').map((desc, index) => (
                  <span key={index}>
                    {desc}
                    {index < contact.description.split('/').length - 1 ? <br /> : ''}
                  </span>
                ))}
              </p>
              <p className={classes.contacts__hours}>
                Пн-Пт: <span className={classes.hours_highlight}>{contact.hours}</span>
              </p>
              <div className={classes.phone__container}>
                <i className={classes.whatsapp__icon}></i>
                <p className={classes.contacts__phone}>{contact.phone}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div ref={nextRef} className={styles.custom_swiper_button_next} style={{ right: '0', top: '40%' }}>
          <span></span>
        </div>
      </Swiper>
    </div>
  );
}
