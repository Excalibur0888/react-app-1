import React, { useEffect } from "react";
import classes from './Header.module.css';

const Header = (props) => {
	const styles = {
		overflow: props.scr ? 'auto' : 'hidden'
	};
	useEffect(() => {
    Object.assign(document.body.style, styles);
	});
	function handle_modal_window_in () {
		props.funcscroll(false)
		props.funcin(false)
	}
	function handle_modal_window_up () {
		props.funcscroll(false)
		props.funcup(false)
	}

	return (
		<header className={classes.header}>
		<span className={classes.header__name}>Fruits guide</span>
		{props.children}
		<button onClick={handle_modal_window_in} className={classes.in_link}>Sign in</button>
		<button onClick={handle_modal_window_up} className={classes.up_link}>Sign up</button>
		</header>
	)
};

export default Header;