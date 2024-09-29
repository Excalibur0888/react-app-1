import React from 'react';
import classes from './BorderLB.module.css'

function BorderLB() {
	return ( 
	<div className={`${classes.line_border_lb} ${classes.line_border_lb_red}`}>
		<span className={`${classes.dotted}`}></span>
	</div> 
	);
}

export default BorderLB;