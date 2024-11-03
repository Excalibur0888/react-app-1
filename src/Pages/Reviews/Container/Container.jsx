import React from "react";
import classes from "./Container.module.css";
import Title from "../../../components/Title/Title";
import ReviewsSwiper from "./ReviewsSwiper";
import InpageImg from "../../../components/InpageImg/InpageImg";

function Container() {
  return (
    <div className={classes.reviews__container}>
      <InpageImg bg={require("../img/dodgeBG.webp")} />
      <Title subtitle="Отзывы" className={classes.reviews__title} />
      <div className={classes.reviews__container__gray}>
        <ReviewsSwiper />
        <a href="https://www.drive2.ru/" target="_blank" rel="noreferrer">
          Все отзывы с Drive2 можно прочитать здесь
        </a>
        <br />
        <div className={classes.reviews__container__text}>
          <span>Или на Яндекс картах ниже</span>
          <img
            className={classes.reviews__img}
            src={require("../img/yndxrev.png")}
            alt="Yandex 5 rating"
          />
          <img
            className={classes.reviews__img}
            src={require("../img/orig.webp")}
            alt="Yandex"
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
