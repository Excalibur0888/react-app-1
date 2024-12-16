import React from 'react';
import classes from './Detailing.module.css';
import DetFeatures from './DetFeatures';
import DetGallery from './DetGallery';

function Detailing() {
	return ( 
		<div className={classes.Detailing}>
			<DetFeatures/>
			<DetGallery/>
		</div>
	 );
}

export default Detailing;