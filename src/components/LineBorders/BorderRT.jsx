import React from 'react';
import classes from './BorderRT.module.css'

function BorderRT() {
	return ( 
		<div className={`${classes.line_border_rt} ${classes.line_border_rt_red}`}>
					<span className={`${classes.dotted}`}></span>
				</div>
	 );
}

export default BorderRT;