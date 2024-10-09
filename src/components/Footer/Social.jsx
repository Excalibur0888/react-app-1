import React from 'react';
import classes from './Social.module.css';

function Social({ drive2, whatsapp, youtube, telegram }) {
	const noPropsProvided = drive2 === undefined && whatsapp === undefined && youtube === undefined && telegram === undefined;

	return (
		<ul className={classes.social}>
			{(drive2 || noPropsProvided) && (
				<li>
					<img src={require('./img/d2.webp')} alt="Drive2" />
				</li>
			)}
			{(whatsapp || noPropsProvided) && (
				<li>
					<i className={`${classes.icon} ${classes.wa_icon}`}></i>
				</li>
			)}
			{(youtube || noPropsProvided) && (
				<li>
					<i className={`${classes.icon} ${classes.yt_icon}`}></i>
				</li>
			)}
			{(telegram || noPropsProvided) && (
				<li>
					<i className={`${classes.icon} ${classes.tg_icon}`}></i>
				</li>
			)}
		</ul>
	);
}

export default Social;
