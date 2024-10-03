import React from 'react';
import classes from './BorderRT.module.css'

function BorderRT({className}) {
	return ( 
		<div className={`${classes.line_border_rt} ${classes.line_border_rt_red} ${className}`}>
					<span className={`${classes.dotted}`}></span>
				</div>
	 );
}

export default BorderRT;