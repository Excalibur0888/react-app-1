import React from 'react';
import classes from './YMap.module.css'

function YMAP() {
	return ( 
		<div className={classes.map__container}>
			<iframe 
			title="Yandex Map"
			src="https://yandex.ru/map-widget/v1/?um=constructor%3Adfc82497b2fb9e4de534b9ebfc69323e12502cf8162d2ec2c23656f02fce99b8&amp;source=constructor" 
			width="1200" height="500" frameborder="0"></iframe>
		</div>
	 );
}

export default YMAP;