import React from "react";
import classes from '../styles/Button.module.css'

export default function Button() {
	return (
		<div className={classes.button}>
		<a className={classes.btn} href="javascript:;" data-fancybox="" data-src="#contacts-modal">
					<p>Сделай этот шаг</p>
					<span className={classes.item1}></span>
					<span className={classes.item2}></span>
					<span className={classes.item3}></span>      
					<span className={classes.item4}></span>                 
				</a>
		</div>
	)
}