import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from '../../../../components/Button'
import 'swiper/css';
import 'swiper/css/navigation';
import './Works.css';

export default function Works() {
  const projects = [
    { description: 'Фирменный шиномонтаж с адаптацией и балансировкой на оборудовании Hunter для BMW X7' },
    { description: 'Фирменный шиномонтаж с адаптацией и балансировкой на стендах Hunter для красивейшего Porsche 718 Boxster S' },
    { description: 'Кузовной ремонт и покраска Range Rover с подбором сложнейшего цвета' },
    { description: 'Подготовка Bentley Continental GT к летнему сезону: выдача автомобиля!' },
    { description: 'Обзор из техцентра 4Motion #34' },
    { description: 'Химчистка салона и ремонт кожи для Mercedes S63 AMG' },
    { description: 'Обслуживание системы кондиционирования и мойка радиаторов на Volkswagen Touareg' },
    { description: 'Техническое обслуживание Mercedes E200' },
    { description: 'Кузовной ремонт и частичная покраска с подбором цвета для Audi RS7' },
    { description: 'Плановое техническое обслуживание Mercedes E-class Coupe' },
    { description: 'Заламинировали классическим карбоном салон BMW X5' },
  ];

  const images = Array.from({ length: 11 }, (_, i) => require(`./img/work${i + 1}.webp`));

  return (
    <div className="works__container">
      <h2 className="works__title">
        <p>Наши <span>свежие</span></p>
        <b>Проекты</b>
      </h2>
      <Swiper
        spaceBetween={-40}
        slidesPerView={4}
        navigation
        loop={true}
				speed={400}
        modules={[Navigation]}
        className="works-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="works-slide">
            <div
              className="works__item"
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <div className="works__overlay"></div>
              <span className="works__line_t"></span>
              <p className='works__item__text'>{project.description}</p>
							<span class="works__line_plus"></span>
              <span className="works__line_b"></span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
			<Button className="works__button" title="Все проекты"/>
    </div>
  );
}
