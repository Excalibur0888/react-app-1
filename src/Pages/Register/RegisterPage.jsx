import { Link } from 'react-router-dom';
import React from 'react';
import RegisterForm from './components/RegisterForm';
import classes from './RegisterPage.module.css';
import 'boxicons'
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
	return (
		<div className={classes.RegisterPage}>
		<Helmet>
			<title>Sign up</title>
		</Helmet>
		<header className={classes.header}>
			<nav className={classes.navbar}>
				<Link to='/'>Home</Link>
				<Link to='/fruits'>Fruits</Link>
				<Link to='/vegetables'>Vegetables</Link>
				<Link to='/flowers'>Flowers</Link>
				<Link to='/trees'>Trees</Link>
				<Link to='/help'>Help</Link>
			</nav>
		</header>

		<div className={classes.background}></div>
		<div className={classes.container}>
			<div className={classes.content}>
			<h2 className={classes.logo}><box-icon name="rocket" color='rgba(255,255,255,1)'></box-icon> Silentlib</h2>

				<div className={classes.textsci}>
					<h2>Hello<br/><span>Please sign up</span></h2>
				
					<p>This is an encyclopedia website that provides a vast collection of knowledge on a wide range of topics. The site aims to provide accurate and up-to-date information that is accessible to everyone, making it an invaluable resource for students, researchers, and curious minds alike.</p>
				
					<div className={classes.socialicons}>
						<a href='https://t.me/A1381527' target='_blank' rel="noreferrer"><box-icon name='telegram' type='logo' color='rgba(255,255,255,1)'></box-icon></a>
						<a href='https://discordapp.com/users/656794059582472218/' target='_blank' rel="noreferrer"><box-icon name='discord-alt' type='logo' color='rgba(255,255,255,1)'></box-icon></a>
						<a href='https://github.com/Excalibur0888' target='_blank' rel="noreferrer"><box-icon type='logo' name='github' color='rgba(255,255,255,1)'></box-icon></a>
						<a href='https://vk.com/excalibur08' target='_blank' rel="noreferrer"><box-icon name='vk' type='logo' color='rgba(255,255,255,1)' target='_blank'></box-icon></a>
					</div>
				</div>
			</div>
			<RegisterForm/>
		</div>
		</div>
	)
}

export default RegisterPage;