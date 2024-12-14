import React from 'react';
import classes from './AdvantageText.module.css'

function AdvantageText({title, subtitle}) {
	return ( 
		<div className={classes.AdvantageText}>
				<span>
					{subtitle}<br/>
					<b>{title}</b>
				</span>
			</div>
	 );
}

export default AdvantageText;