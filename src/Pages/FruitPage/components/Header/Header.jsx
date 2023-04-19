import React, { useEffect } from "react";
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = (props) => {
	const style_burger = `${props.visible ? (props.clicked ? classes.burger_active : classes.burger) : ''}`
	const style_burger_menu = `${props.visible ? (props.clicked ? classes.burger_menu_active : classes.burger_menu) : ''}`
	const style_header = `${props.visible ? classes.header + ' ' + classes.header_mobile : classes.header}`;

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1000) {
				props.setvisible(true);
			} else {
				props.setvisible(false);
			}
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className={style_header}>	
		<div className={classes.wrapper}>
		<div className={`${style_burger}`} onClick={() => {props.setClicked(!props.clicked)}}>
			<span></span>
		</div>
		<a href={window.location.href} className={classes.header__name}>Fruits guide</a>
		<nav className={classes.navbar}>
				<Link to='/'>Home</Link>
				<Link to='/'>All guides</Link>
				<Link to='/login'>Sign in</Link>
				<Link to='/register'>Sign up</Link>
			</nav>
		<div className={style_burger_menu}>
		{props.children}
		</div>
		</div>
		</header>
	)
}

export default Header;