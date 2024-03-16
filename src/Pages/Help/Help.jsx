import React from "react";
import classes from './Help.module.css';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useAuth } from "../../hooks/use-auth";
import tg from '../../img/telegram.png'
import vk from '../../img/vk.png'
import phone from '../../img/phone.png'
import Nav from "../Nav";

const Help = () => {
	const {isAuth, email} = useAuth()
	if (isAuth) {
	return (
		<div className={classes.Help}>
		<Helmet>
			<title>Help</title>
		</Helmet>
			<header className={classes.header}>
			<div className={classes.logo}>
			<box-icon name="rocket" size="1.4em" color='rgba(255,255,255,1)'></box-icon>
			Silentlib
			</div>
			<nav className={classes.navbar}>
				<Link to='/'>Home</Link>
				</nav>
			<nav className={classes.username}>
				<Link to='/profile'><div> {email} <ion-icon name="person"></ion-icon></div></Link>
				</nav>
			</header>
			<h1>Contact support</h1>
			<h2>Get in touch and let us know how we can help</h2>
			<div className={classes.containers}>
				<div><a href='https://t.me/A1381527' target="_blank">Write in Telegram</a><div className={classes.circle}><img src={tg} alt=""/></div><a className={classes.div_footer} href="https://telegram.org/faq#q-what-is-telegram-what-do-i-do-here" target="_blank"><div>Learn more</div></a></div>
				<div><a href='https://vk.com/edgeofeternity85' target="_blank">Write in VK</a><div className={classes.circle}><img src={vk} alt=""/></div><a className={classes.div_footer} href="https://vk.com/dont_panic_42" target="_blank"><div>Learn more</div></a></div>
				<div><a href="#">Make a call</a><div className={classes.circle}><img src={phone} alt=""/></div><a className={classes.div_footer} href="https://www.wikihow.com/Make-a-Phone-Call" target="_blank"><div>Learn more<box-icon  size='20px' name='right-arrow-alt'></box-icon></div></a></div>
			</div>
			<h3>We respond within a day or so</h3>
		</div>
	)
	}
	else {
		return (
		<div className={classes.Help}>
		<header className={classes.header}>
			<div className={classes.logo}>
			<box-icon name="rocket" size="1.4em" color='rgba(255,255,255,1)'></box-icon>
			Silentlib
			</div>
			<nav className={classes.navbar}>
				<Link to='/'>Home</Link>
			</nav>
			<Nav/>
		</header>
			<h1>Contact support</h1>
			<h2>Get in touch and let us know how we can help</h2>
			<div className={classes.containers}>
				<div><a href='https://t.me/A1381527' target="_blank">Write in Telegram</a><div className={classes.circle}><img src={tg} alt=""/></div><a className={classes.div_footer} href="https://telegram.org/faq#q-what-is-telegram-what-do-i-do-here" target="_blank"><div>Learn more</div></a></div>
				<div><a href='https://vk.com/edgeofeternity85' target="_blank">Write in VK</a><div className={classes.circle}><img src={vk} alt=""/></div><a className={classes.div_footer} href="https://vk.com/dont_panic_42" target="_blank"><div>Learn more</div></a></div>
				<div><a href="#">Make a call</a><div className={classes.circle}><img src={phone} alt=""/></div><a className={classes.div_footer} href="https://www.wikihow.com/Make-a-Phone-Call" target="_blank"><div>Learn more</div></a></div>
			</div>
			<h3>We respond within a day or so</h3>
		</div>
		)
	}
}

export default Help;