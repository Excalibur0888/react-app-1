import React, {useRef, useEffect} from "react";
import classes from './Headings.module.css'
import img1 from '../../../../img/cert.png';
import img2 from '../../../../img/24.png';
import img3 from '../../../../img/speed.png';
import BorderLB from "../../../../components/LineBorders/BorderLB";
import BorderRB from "../../../../components/LineBorders/BorderRB";
import BorderRT from "../../../../components/LineBorders/BorderRT";
import BorderLT from "../../../../components/LineBorders/BorderLT";

const Headings = () => {
	const headingsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Настройка чувствительности видимости секции (0.3 = 30% секции видимо)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classes.visible);
          entry.target.style.transitionDelay = `${index * 0.4}s`
        }
      });
    }, observerOptions);

    // Добавляем каждый элемент в наблюдатель
    headingsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    // Очищаем наблюдатель при размонтировании компонента
    return () => {
      headingsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);
	return (
		<div className={classes.headings}>
        <div className={classes.element} ref={(el) => (headingsRef.current[0] = el)}>
          <h2>Репутация</h2>
          <br />
          <span>За 10 лет работы наша команда обрела статус надежного партнера, поскольку мы предоставляем все гарантии на услуги.</span>
          <br />
          <img src={img1} alt="" />
        </div>
        <div className={classes.element} ref={(el) => (headingsRef.current[1] = el)}>
          <h2>Отзывчивость</h2>
          <br />
          <span>Наши менеджеры круглосуточно готовы проконсультровать вас по всем интересующим вопросам.</span>
          <br />
          <img src={img2} alt="" />
        </div>
        <div className={classes.element} ref={(el) => (headingsRef.current[2] = el)}>
          <h2>Качество</h2>
          <br />
          <span>Мы используем только оригинальные запчасти и материалы, соответствующие европейским стандартам.</span>
          <br />
          <img src={img3} alt="" />
        </div>
					<BorderLB/>
					<BorderRB/>
					<BorderRT/>
					<BorderLT/>
      </div>
	)
}

export default Headings;