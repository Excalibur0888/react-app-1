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
				<Link to='/'>About</Link>
				<Link to='/fruits'>Fruits</Link>
				<Link to='/'>Help</Link>
			</nav>
		</header>

		<div className={classes.background}></div>
		<div className={classes.container}>
			<div className={classes.content}>
			<h2 className={classes.logo}><box-icon name="rocket" color='rgba(255,255,255,1)'></box-icon> Silence</h2>

				<div className={classes.textsci}>
					<h2>Welcome!<br/><span>To The Encyclopedia</span></h2>
				
					<p>Aspernatur iste facilis hic amet, vitae accusamus omnis saepe eos sapiente consequatur sunt obcaecati voluptatum at eum? Deserunt possimus sunt rem nostrum!</p>
				
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