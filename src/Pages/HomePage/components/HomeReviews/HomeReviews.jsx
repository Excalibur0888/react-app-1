import React from "react";
import './HomeReviews.css';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from '../../../../components/Button';
import { Link } from "react-router-dom";
import D2Reviews from "./D2Reviews";
import YReviews from "./Yreviews";

export default function HomeReviews() {

  return (
    <div className="previews__wrapper">
      <div className="previews__title elipse-9">
        <span>Наши отзывы ~</span>
        <b>На drive2</b>
      </div>
			<D2Reviews/>
			<div className="previews__title elipse-10">
        <span>Мы делаем нашу работу</span>
        <b>Качественно</b>
        <br/>
      </div>
      <Link to="/reviews" className="HomeReviews__link"><Button title="Все отзывы" className="HomeReviews__button" /></Link>
			<div className="previews__title previews__title__yndx elipse-9">
        <span>Наши отзывы ~</span>
        <b>На yandex</b>
      </div>
			<YReviews/>
		</div>
  );
}
