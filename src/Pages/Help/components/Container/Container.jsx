import React from "react";
import classes from "./Container.module.css";
import YMap from "../../../About/components/YMap";
import Button from "../../../../components/Button";
import Title from "../../../../components/Title/Title";
import Modal from "../Modal/Modal";
import InpageImg from "../../../../components/InpageImg/InpageImg";

function Container() {
  return (
    <div className={classes.help__container}>
      <Title
        title="Мы к вашим"
        subtitle="услугам"
        className={classes.help__title}
      />
      <div className={classes.contact_new_section_1_ellipse}></div>
      <InpageImg bg={require('../../img/X6BG.webp')}/>
      <Modal />
      <YMap />
      <Button
        title="Проложить к нам путь в Яндекс.Навигаторе"
        className={classes.help__btn2}
      />
    </div>
  );
}

export default Container;
