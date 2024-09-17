import React from "react";
import classes from '../styles/Button.module.css'

export default function Button({title, className}) {
	return (
		<div className={`${classes.button} ${className}`}>
		<a className={classes.btn} href="javascript:;" data-fancybox="" data-src="#contacts-modal">
					<p>{title}</p>
					<span className={classes.item1}></span>
					<span className={classes.item2}></span>
					<span className={classes.item3}></span>      
					<span className={classes.item4}></span>                 
				</a>
		</div>
	)
}