import React from 'react';
import classes from './Promo.module.css'

function Promo({className}) {
	return ( 
		<div className={`${classes.container__promo} ${className}`}>
				<a href="tel:+7 (910)575-65-14" className={classes.container__phone}>
					+7 (910) <span>575-65-14</span>
				</a>
			</div>
	 );
}

export default Promo;