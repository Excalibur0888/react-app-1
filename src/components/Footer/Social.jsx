import React from 'react';
import classes from './Social.module.css'

function Social() {
	return ( 
		<ul className={classes.social}>
		<li>
			<img src={require('./img/d2.webp')} alt="Drive2"/>
		</li>
		<li>
			<i className={`${classes.icon} ${classes.wa_icon}`}></i>
		</li>
		<li>
			<i className={`${classes.icon} ${classes.yt_icon}`}></i>
		</li>
		<li>
			<i className={`${classes.icon} ${classes.tg_icon}`}></i>
		</li>
	</ul>
	 );
}

export default Social;