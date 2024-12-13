import React from 'react';
import classes from './Maintenance.module.css';
import CarShowcase from './CarShowcase';
import WorkProcess from './WorkProcess';

function Maintenance() {
	return ( 
		<div className={classes.Maintenance}>
			<WorkProcess/>
			<CarShowcase/>
		</div>
	 );
}

export default Maintenance;