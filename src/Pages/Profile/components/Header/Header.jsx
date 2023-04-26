import React from "react";
import classes from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className={classes.header}>
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