import React from "react";
import classes from './Footer.module.css'
import { Link } from "react-router-dom";
import Button from '../../components/Button'
import Social from "./Social";

export default function Footer() {
	return (
		<footer className={classes.footer__container}>
			<div className={classes.footer__phone}>
				<p>+7 (910)<span>575-65-14</span></p>
			</div>
			<ul className={classes.footer__menu}>
				<li><Link to='/'>Главная</Link></li>
				<li><Link to='/about'>О нас</Link></li>
				<li><Link to='/gallery'>Выставочный зал</Link></li>
				<li><Link to='/services'>Услуги</Link></li>
				<li><Link to='/reviews'>Отзывы</Link></li>
				<li><Link to='/help'>Контакты</Link></li>
			</ul>
			<Social/>
			<div className={classes.pay}>
				<Button title="Найти нас на Яндекс.Картах" className={classes.footer__btn}/>
				<span>Принимаем к оплате:<br/>
				А так же безналичный расчет</span>
				<div>
				<img src={require('./img/pay1.webp')} alt="mastercard"/>
				<img src={require('./img/pay2.webp')} alt="visa"/>
				<img src={require('./img/pay3.webp')} alt="mir"/>
				</div>
			</div>
		</footer>
	)
}