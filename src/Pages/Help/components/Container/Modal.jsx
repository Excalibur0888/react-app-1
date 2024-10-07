import React from "react";
import classes from "./Modal.module.css";
import Social from "../../../../components/Footer/Social";

function Modal() {
  return (
    <div className={classes.modal__container}>
      <h2>Контактная информация</h2>
      <div className={classes.modal__section1}>
        <div className={classes.modal__section1__left}>
					<div className={classes.modal__hours}>
						<span><b> Пн - Сб: с 10:00 до 20:00 </b></span>
					</div>
					<div className={classes.modal__phones}>
						<div className={classes.icon1}></div>
						<div className={classes.icon2}></div>
						<span>Контакты</span>
						<a href="info@4motion.com">info@4motion.com</a>
						<a href="tel:+7 (910) 575-65-14">+7 (910) 575-65-14</a>
						<span>ООО 4motion, ИНН: 7714326177</span>
					</div>
				</div>
				<div className={classes.modal__section1__right}>
					<div className={classes.modal__desc}>
						Наш адрес
						<br/>
						<a href="https://yandex.ru/maps/-/CCQlyUeBSD" target="_blank">
						Москва, ул. Тверская-Ямская, дом 2, стр. 3
						</a>
					</div>
					<div className={classes.modal__desc2}>
						GPS координаты для навигаторов:
						<span>55.736486, 37.711339</span>
					</div>
					<div className={classes.modal__socials}>
						<Social/>
					</div>
				</div>
      </div>
    </div>
  );
}

export default Modal;
