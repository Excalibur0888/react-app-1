import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../../../../hooks/use-auth'
import classes from './Container.module.css';
import 'boxicons'

const Container = () => {
	const navigate = useNavigate();
	const {isAuth, email} = useAuth();
	if (isAuth) {
		return(
			<div className={classes.container}>
			<header className={classes.header}>
			<div className={classes.logo}>
			<box-icon name="rocket" size="1.4em" color='rgba(255,255,255,1)'></box-icon>
			Silentlib
			</div>
			<nav className={classes.navbar}>
				<Link to='/'>Home</Link>
				<Link to='/help'>Help</Link>
				<Link to='/fruits'>Fruits</Link>
				<Link to='/vegetables'>Vegetables</Link>
				<Link to='/flowers'>Flowers</Link>
				<Link to='/profile'>Profile</Link>
			</nav>
			<nav className={classes.username}>
			<Link to='/profile'><div> {email} <box-icon type='solid' name='user' size="30px" color='rgba(255,255,255,1)'></box-icon></div></Link>
			</nav>
			</header>
			<h1>Welcome to <box-icon name="rocket" size="4em" color='rgba(255,255,255,1)'></box-icon>Silentlib</h1>
			<h2>Unlock the world's knowledge</h2>
			<h3>{email}</h3>
			<div className={classes.about} onClick={() => navigate('/help')}>Contact support <box-icon name='message-rounded' size="23px" color='rgba(255,255,255,1)'></box-icon></div>
		</div>
		)
	}
	else {
	return (
		<div className={classes.container}>
			<header className={classes.header}>
			<div className={classes.logo}>
			<box-icon name="rocket" size="1.4em" color='rgba(255,255,255,1)'></box-icon>
			Silentlib
			</div>
			<nav className={classes.navbar}>
				<Link to='/'>Home</Link>
				<Link to='/help'>Help</Link>
				<Link to='/fruits'>Fruits</Link>
				<Link to='/vegetables'>Vegetables</Link>
				<Link to='/flowers'>Flowers</Link>
				<Link to='/login'>Profile</Link>
			</nav>
			<nav className={classes.loginreg}>
				<div><box-icon name='lock-alt' type='solid' size="20px" color='rgba(255,255,255,1)'></box-icon><Link to='/login'>Sign in</Link></div>
				<div><box-icon name='lock-alt' type='solid' size="20px" color='rgba(255,255,255,1)'></box-icon><Link to='/register'>Sign up</Link></div>
			</nav>
			</header>
			<h1>Welcome to <box-icon name="rocket" size="4em" color='rgba(255,255,255,1)'></box-icon>Silentlib</h1>
			<h2>Unlock the world's knowledge</h2>
			<button onClick={() => navigate('/register')}><box-icon name='lock-alt' type='solid' size="15px" color='rgba(255,255,255,1)'></box-icon> SIGN UP FREE</button>
			<div className={classes.about} onClick={() => navigate('/help')}>Contact support <box-icon name='message-rounded' size="23px" color='rgba(255,255,255,1)'></box-icon></div>
		</div>
	)
	}
}

export default Container;