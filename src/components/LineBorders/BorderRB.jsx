import React from 'react';
import classes from './BorderRB.module.css'

function BorderRB() {
	return ( 
	<div className={`${classes.line_border_rb} ${classes.line_border_rb_gray}`}>
		<span className={`${classes.dotted}`}></span>
	</div> 
	);
}

export default BorderRB;