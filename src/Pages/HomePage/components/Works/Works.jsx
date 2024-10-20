import React from 'react';
import './Works.css';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';
import WorksSwiper from './WorksSwiper';

export default function Works() {
  return (
    <div className="works__container">
      <h2 className="works__title">
        <p>Наши <span>свежие</span></p>
        <b>Проекты</b>
      </h2>
      <WorksSwiper/>
      <Link to="/gallery" className="works__link"><Button className="works__button" title="Все проекты" /></Link>
      <div className="line-background"></div>
    </div>
  );
}
