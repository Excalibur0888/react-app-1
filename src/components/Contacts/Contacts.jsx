import React from "react";
import './Contacts.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import contacts from './contactsData';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Contacts() {
  const images = Array.from({ length: 8 }, (_, i) => require(`./img/person${i + 1}.webp`));

  return (
    <div className="contacts__container">
      <Swiper
        slidesPerView={3}
        navigation
        loop={true}
        speed={400}
        modules={[Navigation]}
        className="contacts-swiper"
      >
        {contacts.map((contact, index) => (
          <SwiperSlide key={index} className="contacts-slide">
            <div className="contacts__item">
              <div className="contacts__image" style={{ backgroundImage: `url(${images[index]})` }}></div>
              <div className="contacts__name">{contact.name}</div>
              <p className="contacts__description">
								{contact.description.split('/').map((desc, index) => (
									<span key={index}>{desc}{index < contact.description.split('/').length - 1 ? <br /> : ''}</span>
								))}
							</p>
              <p className="contacts__hours">
								Пн-Пт: <span className="hours-highlight">{contact.hours}</span>
							</p>
              <div className="phone__container">
								<i className="whatsapp__icon"></i><p className="contacts__phone">{contact.phone}</p>
								</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
