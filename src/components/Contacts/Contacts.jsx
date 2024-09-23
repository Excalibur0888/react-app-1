import React from "react";
import './Contacts.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Contacts() {
  const contacts = [
    {
      name: 'Анатолий',
      description: 'Описание работы с клиентами.',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (123) 456-78-90'
    },
    {
      name: 'Павел',
      description: 'Специалист по технической поддержке.',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (123) 456-78-90'
    },
    {
      name: 'Игорь',
      description: 'Руководитель отдела продаж.',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (123) 456-78-90'
    },
    {
      name: 'Дмитрий',
      description: 'Менеджер по проектам.',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (123) 456-78-90'
    },
    {
      name: 'Григорий',
      description: 'Специалист по IT-инфраструктуре.',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (123) 456-78-90'
    },
    {
      name: 'Михаил',
      description: 'Разработчик фронтенд.',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (123) 456-78-90'
    },
    {
      name: 'Александр',
      description: 'Дизайнер интерфейсов.',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (123) 456-78-90'
    },
    {
      name: 'Данил',
      description: 'Бэкенд-разработчик.',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (123) 456-78-90'
    },
  ];

  const images = Array.from({ length: 8 }, (_, i) => require(`./img/person${i + 1}.webp`));

  return (
    <div className="contacts__container">
      <Swiper
        spaceBetween={-40}
        slidesPerView={4}
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
              <p className="contacts__description">{contact.description}</p>
              <p className="contacts__hours">{contact.hours}</p>
              <p className="contacts__phone">{contact.phone}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
