import React, { useRef, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './WorksSwiper.css'
import 'swiper/css';
import 'swiper/css/navigation';

function WorksSwiper() {
	const projects = [
    { description: 'Фирменный шиномонтаж с адаптацией и балансировкой на оборудовании Hunter для BMW X7' },
    { description: 'Фирменный шиномонтаж с адаптацией и балансировкой на стендах Hunter для Porsche 718 Boxster S' },
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

  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.setProperty('--delay', `${index * 0.01}s`);

            // Прекращаем наблюдение за элементом, чтобы он не анимировался повторно
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);
	return ( 
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
          <SwiperSlide
            key={index}
            className="works-slide"
          >
            <div
              className="works__item"
              ref={(el) => (itemsRef.current[index] = el)}
              style={{ backgroundImage: `url(${images[index]})` }}
            >
              <div className="works__overlay"></div>
              <span className="works__line_t"></span>
              <p className="works__item__text">{project.description}</p>
              <span className="works__line_plus"></span>
              <span className="works__line_b"></span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
	 );
}

export default WorksSwiper;