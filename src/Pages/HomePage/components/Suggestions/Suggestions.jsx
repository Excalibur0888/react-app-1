import React, { useRef, useEffect } from "react";
import classes from './Suggestions.module.css';
import Button from '../../../../components/Button';
import { Link } from "react-router-dom";
import PairContainer from './PairContainer';

export default function Suggestions() {
  const pairRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classes.visible);
          entry.target.style.transitionDelay = `${index * 0.3}s`;
        }
      });
    }, observerOptions);

    pairRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

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

      <PairContainer
        align="left"
        videoSrc="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2023/Bugatti-Models/Super-Sport/engine-chiron-supersport-desktop.mp4"
        title="Техническое обслуживание"
        text="Новейшие технические решения, качественная диагностика и опытная команда — ключ к непревзойденной динамике и скорости. Превратите свой двигатель в настоящее произведение инженерного искусства."
        videoClass={classes.videoItem1}
        refElement={(el) => (pairRef.current[0] = el)}
      />

      <PairContainer
        align="right"
        videoSrc="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/03_Technique/comp/Bugatti_Tourbillon_03a_beauty_underneath_d0.mp4"
        title="Шумоизоляцию"
        text="Подарите своему автомобилю комфорт и чистоту звука с нашей профессиональной шумоизоляцией. Наслаждайтесь кристально чистым звуком любимой музыки и комфортной тишиной на дороге."
        videoClass={classes.videoItem2}
        refElement={(el) => (pairRef.current[1] = el)}
      />

      <PairContainer
        align="left"
        videoSrc="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/04_Form_follows_performance/comp/Bugatti_Tourbillon_04b_aerodynamics_d.mp4"
        title="Детейлинг"
        text="Почувствуйте, как ваш автомобиль расцветает в руках профессионалов. Тщательная очистка и восстановление каждой детали вернут ему первозданный вид, обеспечивая непревзойденную чистоту и блеск, который не останется незамеченным."
        videoClass={classes.videoItem3}
        refElement={(el) => (pairRef.current[2] = el)}
      />

      <PairContainer
        align="right"
        videoSrc="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/05_Interior/comp/Bugatti_Tourbillon_05ab_entry_material_d.mp4"
        title="Пошив салона"
        text="Преобразите интерьер вашего автомобиля с помощью премиум обшивки и отделки. Элегантные материалы и умелые руки создадут уют и стиль, подчеркивая индивидуальность и комфорт в каждой поездке."
        videoClass={classes.videoItem4}
        refElement={(el) => (pairRef.current[3] = el)}
      />

      <Link className={classes.link} to='/services' ref={(el) => (pairRef.current[4] = el)}>
        <Button className={classes.V16Button} title="ПОЛНЫЙ КАТАЛОГ" />
      </Link>
    </div>
  );
}
