import React from "react";
import classes from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<nav className={classes.loginreg}>
			<Link to='/login'>Sign in</Link>
			<Link to='/register'>Sign up</Link>
		</nav>
	)
}