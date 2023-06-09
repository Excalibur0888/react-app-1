import React from "react";
import classes from '../../../../styles/Header.module.css';
import { useAuth } from '../../../../hooks/use-auth'
import { Link } from 'react-router-dom';
const Header = (props) => {
	const {isAuth, email} = useAuth();

	if (isAuth) {
		return (
			<header className={classes.header}>	
			<a href={window.location.href} className={classes.header__name}>Vegetables guide</a>
			<nav className={classes.navbar}>
			<Link to='/'>Home</Link>
			<div className={classes.dropdown}>
					<div className={classes.dropbtn}>Choose section</div>
					<div className={classes.dropdownContent}>
						<Link to='/fruits'>Fruits</Link>
						<Link to='/trees'>Trees</Link>
						<Link to='/flowers'>Flowers</Link>
					</div>
				</div>
			</nav>
			<nav className={classes.username}>
				<Link to='/profile'><div> {email} <box-icon type='solid' name='user' size="30px" color='rgba(255,255,255,1)'></box-icon></div></Link>
			</nav>
			{props.children}
			</header>
		)
	}
	else {
		return (
			<header className={classes.header}>	
			<a href={window.location.href} className={classes.header__name}>Vegetables guide</a>
			<nav className={classes.navbar}>
			<Link to='/'>Home</Link>
			<div className={classes.dropdown}>
					<div className={classes.dropbtn}>Choose section</div>
					<div className={classes.dropdownContent}>
						<Link to='/fruits'>Fruits</Link>
						<Link to='/trees'>Trees</Link>
						<Link to='/flowers'>Flowers</Link>
					</div>
				</div>
			</nav>
			<nav className={classes.loginreg}>
				<div><box-icon name='lock-alt' type='solid' size="20px" color='rgba(255,255,255,1)'></box-icon><Link to='/login'>Sign in</Link></div>
				<div><box-icon name='lock-alt' type='solid' size="20px" color='rgba(255,255,255,1)'></box-icon><Link to='/register'>Sign up</Link></div>
			</nav>
			{props.children}
			</header>
		)
	}
}

export default Header;