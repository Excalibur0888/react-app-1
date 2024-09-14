import React, { useRef, useEffect } from "react";
import './V16Engine.css';

export default function V16Engine() {
	const pairRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Процент видимости элемента, при котором срабатывает анимация
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Добавляем класс при появлении на экране
          entry.target.style.transitionDelay = `${index * 0.3}s`; // Добавляем задержку для плавности
        }
      });
    }, observerOptions);

    // Добавляем каждый элемент в наблюдатель
    pairRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    // Очищаем наблюдатель при размонтировании компонента
    return () => {
      pairRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  return (
    <div className="grid-container">
      <div className="pair-container left-align" ref={(el) => (pairRef.current[0] = el)}>
        <div className="video-item">
          <video autoPlay muted loop>
            <source src={"https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/03_Technique/comp/Bugatti_Tourbillon_03c_engine_d.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className="text-item">Новейшие технические решения, качественная диагностика и опытная команда — ваш ключ к непревзойденной динамике и скорости. Превратите свой двигатель в настоящее произведение инженерного искусства.</div>
      </div>

      <div className="pair-container right-align" ref={(el) => (pairRef.current[1] = el)}>
        <div className="text-item">Подарите своему автомобилю комфорт и чистоту звука с нашей профессиональной шумоизоляцией. Наслаждайтесь кристально чистым звуком любимой музыки и комфортной тишиной на дороге.</div>
        <div className="video-item">
          <video autoPlay muted loop>
            <source src={"https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/03_Technique/comp/Bugatti_Tourbillon_03a_beauty_underneath_d0.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="pair-container left-align" ref={(el) => (pairRef.current[2] = el)}>
        <div className="video-item">
          <video autoPlay muted loop>
            <source src={"https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/04_Form_follows_performance/comp/Bugatti_Tourbillon_04b_aerodynamics_d.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className="text-item">Улучшите аэродинамику вашего автомобиля для максимальной скорости и экономии топлива. Наши решения уменьшают сопротивление и улучшают управляемость, делая каждую поездку более плавной и эффективной.</div>
      </div>

			<div className="pair-container right-align" ref={(el) => (pairRef.current[3] = el)}>
			<div className="text-item">Преобразите интерьер вашего автомобиля с помощью премиум обшивки и отделки. Элегантные материалы и умелые руки создадут уют и стиль, подчеркивая индивидуальность и комфорт в каждой поездке.</div>
        <div className="video-item">
          <video autoPlay muted loop>
            <source src={"https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/05_Interior/comp/Bugatti_Tourbillon_05ab_entry_material_d.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
