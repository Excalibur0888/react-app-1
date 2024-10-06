import React from 'react';
import classes from './SocialLinks.module.css'

function SocialLinks() {
	return ( 
		<ul className={classes.SocialLinks__container}>
			<li className={classes.inst__icon}>
				<span className={classes.iconLabel}>Instagram</span>
			</li>
			<li className={classes.wa__icon}>
				<span className={classes.iconLabel}>WhatsApp</span>
			</li>
			<li className={classes.yt__icon}>
				<span className={classes.iconLabel}>YouTube</span>
			</li>
			<li className={classes.tg__icon}>
				<span className={classes.iconLabel}>Telegram</span>
			</li>
			<li className={classes.vk__icon}>
				<span className={classes.iconLabel}>VK</span>
			</li>
		</ul>
	);
}

export default SocialLinks;
