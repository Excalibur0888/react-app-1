import React from "react";
import classes from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<nav className={classes.loginreg}>
			<Link to='/login'>Войти</Link>
			<Link to='/register'>Регистрация</Link>
		</nav>
	)
}