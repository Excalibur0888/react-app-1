import React from "react";
import classes from './Footer.module.css'
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className={classes.footer__container}>
			<div className={classes.footer__phone}>
				<p>+7 (910)<span>575-65-14</span></p>
			</div>
			<ul className={classes.footer__menu}>
				<li><Link to='/about'>О нас</Link></li>
				<li><Link to='/gallery'>Выставочный зал</Link></li>
				<li><Link to='/services'>Услуги</Link></li>
				<li><Link to='/reviews'>Отзывы</Link></li>
				<li><Link to='/help'>Контакты</Link></li>
			</ul>
		</footer>
	)
}