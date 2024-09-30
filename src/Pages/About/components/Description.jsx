import React from 'react';
import classes from './Description.module.css'

function Description() {
	return ( 
		<div className={classes.description}>
			<h2 class={classes.about__title}>
    		<p>О НАШЕЙ <b><span>СТУДИИ</span></b></p>
    	</h2>
			<div className={classes.subtitle}>И команде</div>
		</div>
	 );
}

export default Description;