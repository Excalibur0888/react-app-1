import React from "react";
import classes from '../../styles/Containers.module.css';

export default function LoadingPage({title}) {
	return (
		<div className={classes.loading__title}><br/>
			<h1 className={classes.loading__heading}>{title} is loading, please stand by...</h1>
			<div className={classes.loading}></div>
			</div>
	)
}