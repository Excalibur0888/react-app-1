import React from "react";
import classes from './Help.module.css';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useAuth } from "../../hooks/use-auth";
import tg from '../../img/telegram.png'
import vk from '../../img/vk.png'
import phone from '../../img/phone.png'

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
				<Link to='/profile'><div> {email} <box-icon type='solid' name='user' size="30px" color='rgba(255,255,255,1)'></box-icon></div></Link>
				</nav>
			</header>
			<h1>Contact support</h1>
			<h2>Get in touch and let us know how we can help</h2>
			<div className={classes.containers}>
			<div><a href='https://t.me/A1381527' target="_blank">Write in Telegram</a><div className={classes.circle}><img src={tg} alt=""/></div><a className={classes.div_footer} href="https://telegram.org/faq#q-what-is-telegram-what-do-i-do-here" target="_blank"><div>Learn more<box-icon size='20px' name='right-arrow-alt'></box-icon></div></a></div>
			<div><a href='https://vk.com/excalibur08' target="_blank">Write in VK</a><div className={classes.circle}><img src={vk} alt=""/></div><a className={classes.div_footer} href="https://vk.com/dont_panic_42" target="_blank"><div>Learn more<box-icon size='20px' name='right-arrow-alt'></box-icon></div></a></div>
			<div><a>Call by mobile number (Russia) +7(910)575-65-14 (Ukraine) +38(067)963-78-21</a><div className={classes.circle}><img src={phone} alt=""/></div><a className={classes.div_footer} href="https://www.wikihow.com/Make-a-Phone-Call" target="_blank"><div>Tutorial<box-icon  size='20px' name='right-arrow-alt'></box-icon></div></a></div>
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
		<nav className={classes.loginreg}>
				<div><box-icon name='lock-alt' type='solid' size="20px" color='rgba(255,255,255,1)'></box-icon><Link to='/login'>Sign in</Link></div>
				<div><box-icon name='lock-alt' type='solid' size="20px" color='rgba(255,255,255,1)'></box-icon><Link to='/register'>Sign up</Link></div>
			</nav>
		</header>
		<h1>Contact support</h1>
		<h2>Get in touch and let us know how we can help</h2>
		<div className={classes.containers}>
		<div><a href='https://t.me/A1381527' target="_blank">Write in Telegram</a><div className={classes.circle}><img src={tg} alt=""/></div><a className={classes.div_footer} href="https://telegram.org/faq#q-what-is-telegram-what-do-i-do-here" target="_blank"><div>Learn more<box-icon size='20px' name='right-arrow-alt'></box-icon></div></a></div>
		<div><a href='https://vk.com/excalibur08' target="_blank">Write in VK</a><div className={classes.circle}><img src={vk} alt=""/></div><a className={classes.div_footer} href="https://vk.com/dont_panic_42" target="_blank"><div>Learn more<box-icon size='20px' name='right-arrow-alt'></box-icon></div></a></div>
		<div><a>Call by mobile number (Russia) +7(910)575-65-14 (Ukraine) +38(067)963-78-21</a><div className={classes.circle}><img src={phone} alt=""/></div><a className={classes.div_footer} href="https://www.wikihow.com/Make-a-Phone-Call" target="_blank"><div>Tutorial<box-icon  size='20px' name='right-arrow-alt'></box-icon></div></a></div>
		</div>
		<h3>We respond within a day or so</h3>
	</div>
		)
	}
}

export default Help;