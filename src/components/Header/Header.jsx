import React from "react";
import classes from './Header.module.css';

const Header = (props) => {
	function modal_windowup_visible () {
		props.funcup(false)
	}
	function modal_windowin_visible () {
		props.funcin(false)
	}
	return (
		<header className={classes.header}>
		<span className={classes.header__name}>Fruits guide</span>
		{props.children}
		<button onClick={modal_windowup_visible} className={classes.in_link}>Sign in</button>
		<button onClick={modal_windowin_visible} className={classes.up_link}>Sign up</button>
		</header>
	)
};

export default Header;