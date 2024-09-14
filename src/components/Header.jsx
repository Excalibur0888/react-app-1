import React from "react";
import classes from '../styles/Header.module.css';
import { useAuth } from '../hooks/use-auth'
import { Link } from 'react-router-dom';
import Nav from "./Nav";
const Header = (props) => {
	const {isAuth, email} = useAuth();
	if (isAuth) {
		return (
			<header className={classes.header}>	
			<Link className={classes.header__name} to='/'>4Motion</Link>
			<nav className={classes.navbar}>
				<Link to='/about'>О нас</Link>
				<Link to='/gallery'>Выставочный зал</Link>
				<Link to='/services'>Услуги</Link>
				<Link to='/reviews'>Отзывы</Link>
				<Link to='/help'>Контакты</Link>
			</nav>
			<nav className={classes.username}>
				<Link to='/profile'><div> {email} <box-icon type='solid' name='user' size="30px" color='rgba(255,255,255,1)'></box-icon></div></Link>
			</nav>
			{props.children}
			</header>
		)
	}
	else {
		return (
			<header className={classes.header}>	
			<Link className={classes.header__name} to='/'>4Motion</Link>
			<nav className={classes.navbar}>
				<Link to='/about'>О нас</Link>
				<Link to='/gallery'>Выставочный зал</Link>
				<Link to='/services'>Услуги</Link>
				<Link to='/reviews'>Отзывы</Link>
				<Link to='/help'>Контакты</Link>
			</nav>
			<Nav/>
			{props.children}
			</header>
		)
	}
}

export default Header;