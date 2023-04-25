import React from "react";
import classes from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
			<box-icon name="rocket" size="1.4em" color='rgba(255,255,255,1)'></box-icon>
			Silentlib
			</div>
			<h1>My profile</h1>
			<nav className={classes.navbar}>
				<Link to='/'>Home</Link>
				<Link to='/help'>Help</Link>
				<Link to='/fruits'>Fruits</Link>
				<Link to='/vegetables'>Vegetables</Link>
			</nav>
			</header>
	)
}

export default Header;