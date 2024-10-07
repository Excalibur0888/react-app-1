import React from "react";
import './HomeReviews.css';
import 'swiper/css';
import 'swiper/css/navigation';
import Button from '../../../../components/Button';
import { Link } from "react-router-dom";
import D2Reviews from "./D2Reviews";
import YReviews from "./Yreviews";
import Title from "../../../../components/Title/Title";

export default function HomeReviews() {

  return (
    <div className="previews__wrapper">
      <Title title="Наши отзывы" subtitle="На Drive2" className="elipse-9 previews__title__d2"/>
			<D2Reviews/>
			<Title title="Мы делаем нашу работу" subtitle="Качественно" className="elipse-9 previews__title__d2"/>
      <Link to="/reviews" className="HomeReviews__link"><Button title="Все отзывы" className="HomeReviews__button" /></Link>
			<Title title="Наши отзывы" subtitle="На Yandex" className="elipse-9 previews__title__yndx"/>
			<YReviews/>
		</div>
  );
}
