import React from 'react';
import classes from './Maintenance.module.css';
import CarShowcase from './CarShowcase';

function Maintenance() {
	return ( 
		<div className={classes.Maintenance}>
			<CarShowcase/>
		</div>
	 );
}

export default Maintenance;