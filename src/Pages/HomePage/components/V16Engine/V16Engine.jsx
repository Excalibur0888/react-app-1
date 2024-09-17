import React, { useRef, useEffect } from "react";
import classes from './V16Engine.module.css';
import Button from '../../../../components/Button';
import { Link } from "react-router-dom";

export default function V16Engine() {
  const pairRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Процент видимости элемента, при котором срабатывает анимация
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classes.visible);
          entry.target.style.transitionDelay = `${index * 0.3}s`;
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
    <div className={classes.gridContainer}>
      <div className={classes.productsTitle}>
        <h2>
          <span>4MOTION</span>
          <b>Предлагает</b>
        </h2>
      </div>

      <div className={`${classes.pairContainer} ${classes.leftAlign}`} ref={(el) => (pairRef.current[0] = el)}>
        <div className={`${classes.videoItem} ${classes.videoItem1}`}>
          <video autoPlay muted loop>
            <source src={"https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/03_Technique/comp/Bugatti_Tourbillon_03c_engine_d.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className={classes.textItem}>
          <h1>Увеличение мощности</h1>
          Новейшие технические решения, качественная диагностика и опытная команда — ваш ключ к непревзойденной динамике и скорости. Превратите свой двигатель в настоящее произведение инженерного искусства.
        </div>
      </div>

      <div className={`${classes.pairContainer} ${classes.rightAlign}`} ref={(el) => (pairRef.current[1] = el)}>
        <div className={classes.textItem}>
          <h1>Шумоизоляцию</h1>
          Подарите своему автомобилю комфорт и чистоту звука с нашей профессиональной шумоизоляцией. Наслаждайтесь кристально чистым звуком любимой музыки и комфортной тишиной на дороге.
        </div>
        <div className={`${classes.videoItem} ${classes.videoItem2}`}>
          <video autoPlay muted loop>
            <source src={"https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/03_Technique/comp/Bugatti_Tourbillon_03a_beauty_underneath_d0.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={`${classes.pairContainer} ${classes.leftAlign}`} ref={(el) => (pairRef.current[2] = el)}>
        <div className={`${classes.videoItem} ${classes.videoItem3}`}>
          <video autoPlay muted loop>
            <source src={"https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/04_Form_follows_performance/comp/Bugatti_Tourbillon_04b_aerodynamics_d.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className={classes.textItem}>
          <h1>Улучшение аэродинамики</h1>
          Улучшите аэродинамику вашего автомобиля для максимальной скорости и экономии топлива. Наши решения уменьшают сопротивление и улучшают управляемость, делая каждую поездку более плавной и эффективной.
        </div>
      </div>

      <div className={`${classes.pairContainer} ${classes.rightAlign}`} ref={(el) => (pairRef.current[3] = el)}>
        <div className={classes.textItem}>
          <h1>Отделку салона</h1>
          Преобразите интерьер вашего автомобиля с помощью премиум обшивки и отделки. Элегантные материалы и умелые руки создадут уют и стиль, подчеркивая индивидуальность и комфорт в каждой поездке.
        </div>
        <div className={`${classes.videoItem} ${classes.videoItem4}`}>
          <video autoPlay muted loop>
            <source src={"https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/05_Interior/comp/Bugatti_Tourbillon_05ab_entry_material_d.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      <Link className={classes.link} to='/services' ref={(el) => (pairRef.current[4] = el)}>
        <Button className={classes.V16Button} title="ПОЛНЫЙ КАТАЛОГ" />
      </Link>
    </div>
  );
}
