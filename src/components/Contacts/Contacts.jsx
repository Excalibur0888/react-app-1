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
      description: 'Техническое обслуживание/Выхлопные системы/Тормозные системы/Диагностика/Шиномонтаж/Подвеска/Тюнинг',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (997) 436-18-92'
    },
    {
      name: 'Павел',
      description: 'Выхлопные системы/Даунпайпы/Подготовка под Stage',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (983) 412-71-90'
    },
    {
      name: 'Игорь',
      description: 'Детейлинг, полировка/Химчистка, керамика/Химчистка подкапотки/Химчистка дисков/Химчистка подвески',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (910) 416-18-30'
    },
    {
      name: 'Дмитрий',
      description: 'Оклейка плёнками/Винилография/Защита салона и экранов',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (915) 996-81-20'
    },
    {
      name: 'Григорий',
      description: 'Автозвук/Шумоизоляция/Доп. оборудование',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (930) 126-38-99'
    },
    {
      name: 'Михаил',
      description: 'Цветные ремни безопасности/Звёздное небо/Светодиодный тюнинг/Пошив салонов',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (913) 844-98-50'
    },
    {
      name: 'Александр',
      description: 'Установка обвесов/Покраска суппортов/Кузовной ремонт/Карбон/Антихром/Изготовление кованых дисков/Ремонт и покраска дисков/Порошковая окраска деталей',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (920) 512-41-87'
    },
    {
      name: 'Данил',
      description: 'Обвесы/Тормоза/Кузовной ремонт',
      hours: 'Пн-Пт: 10:00-20:00',
      phone: '+7 (925) 466-18-09'
    },
  ];

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
              <p className="contacts__hours">{contact.hours}</p>
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
