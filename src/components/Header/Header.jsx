import React, { useEffect } from "react";
import classes from './Header.module.css';
import myImage from './icon.jpg'

const Header = (props) => {
	const style_burger = `${props.visible ? (props.clicked ? classes.burger_active : classes.burger) : ''}`
	const style_burger_menu = `${props.visible ? (props.clicked ? classes.burger_menu_active : classes.burger_menu) : ''}`
	const style_header = `${props.visible ? classes.header + ' ' + classes.header_mobile : classes.header}`;
	const style_btn = `${props.visible ? (props.clicked ? classes.btn_burger : classes.btn_hidden) : classes.btn}`;
	const username = `${props.visible ? (props.clicked ? classes.img_username_burger : classes.img_username_hidden) : classes.img_username}`
	const styles = {overflow: props.scr ? 'auto' : 'hidden'};
	useEffect(() => {
    Object.assign(document.body.style, styles);
	});

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

	function handle_modal_window_in () {
		props.funcscroll(false)
		props.funcin(false)
	}
	function handle_modal_window_up () {
		props.funcscroll(false)
		props.funcup(false)
	}
	if (props.heading) {
	return (
		<header className={style_header}>	
		<div className={classes.wrapper}>
		<div className={`${style_burger}`} onClick={() => {props.setClicked(!props.clicked)}}>
			<span></span>
		</div>
		<span className={classes.header__name}>Fruits guide</span>
		<div className={style_burger_menu}>
		{props.children}
		<div className={username}>
		<span>{props.heading}</span>
		<img src={myImage} alt=""/>
		</div>
		</div>
		</div>
		</header>
	)
}
	else {
		return (
		<header className={style_header}>
		<div className={classes.wrapper}>
		<div className={`${style_burger}`} onClick={() => props.setClicked(!props.clicked)}>
			<span></span>
		</div>
		<span className={classes.header__name}>Fruits guide</span>
		<div className={style_burger_menu}>
		{props.children}
		<button type="button" onClick={handle_modal_window_in} className={`${style_btn} ${classes.sign_in}`} >Sign in</button>
		<button type="button" onClick={handle_modal_window_up} className={`${style_btn} ${classes.sign_up}`}>Sign up</button>
		</div>
		</div>
		</header>
	)
	}
};

export default Header;