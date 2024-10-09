import React from "react";
import classes from "./Container.module.css";
import YMap from '../../../About/components/YMap';
import Button from "../../../../components/Button";
import Title from "../../../../components/Title/Title";
import Modal from "../Modal/Modal";

function Container() {
  return (
    <div className={classes.help__container}>
			<Title title="Мы к вашим" subtitle="услугам" className={classes.help__title}/>
      <div className={classes.contact_new_section_1_ellipse}></div>
      <div className={classes.inpage_img}>
        <img src={require("../../img/X6BG.webp")} alt="background"/>
      </div>
			<Modal/>
			<YMap/>
			<Button title="Проложить к нам путь в Яндекс.Навигаторе" className={classes.help__btn2}/>
    </div>
  );
}

export default Container;
