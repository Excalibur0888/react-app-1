import React, { useEffect } from 'react';
import classes from './Containers.module.css';
import axios from 'axios';

const Containers = (props) => {
	useEffect(() => {
		axios.get('http://localhost:5000/api')
			.then(response => {
				props.funcsetBoxContent(response.data);
				props.setValueCopy(response.data)
			})
			.catch(error => console.error(error));;
	}, [window.location.href]);

		if (props.value.length !== 0) {
			return (
				<div className={classes.container}>
					{props.value.map((fruit, index) => (
						<div className={classes.box} key={index}>
							<a href={`https://en.wikipedia.org/wiki/${fruit}`} target="_blank" rel="noreferrer">
								{fruit}
							</a>
						</div>
					))}
				</div>
			)
		} else {
			return (
				<h1 className={classes.not_found}>Fruits not found :(</h1>
			)
		}
};
export default Containers;