import React from "react";
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<header className={classes.header}><span className={classes.header__name}>Heading</span>
		{props.children}
		<button className={classes.in_link}>Sign in</button>
		<button className={classes.up_link}>Sign up</button>
		</header>
	)
};

export default Header;