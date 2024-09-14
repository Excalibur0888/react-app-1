import React, { useState } from 'react';
import classes from '../../../../styles/Containers.module.css';

const Containers = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [loadingPageTitle, setLoadingPageTitle] = useState("Gallery is loading, please stand by")
		return (
			<div className='wrapper'>
			<h3 className={classes.container__name}></h3>
			</div>
		);
};

export default Containers;
