import React from 'react';
import classes from './BorderLT.module.css'

function BorderLT() {
	return ( 
		<div className={`${classes.line_border_lt} ${classes.line_border_lt_gray}`}>
					<span className={`${classes.dotted}`}></span>
				</div>
	 );
}

export default BorderLT;