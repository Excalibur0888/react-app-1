import React, { useEffect } from 'react';
import classes from './Containers.module.css';
import axios from 'axios';

const Containers = (props) => {
	const arr_length = props.valueCopy.length
	const styles = `${props.value.length === arr_length ? classes.box : classes.box_filtered}`
	useEffect(() => {
		axios.get('http://localhost:5000/api')
			.then(response => {
				props.funcsetBoxContent(response.data.fruitNames);
				props.setValueCopy(response.data.fruitNames);
				props.setFruitImages(response.data.fruitImages);
			})
			.catch(error => console.error(error));
	}, []);

	if (props.value.length !== 0) {
		return (
			<div className='wrapper'>
			<h3 className={classes.container__name}>Some of this items are fruits, according to the scientific definition, but are sometimes considered to be vegetables</h3>
			<div className={classes.container}>
				{props.value.map((fruit, index) => (
					<div
					className={styles}
					key={index}
					style={{
						...(props.value.length === arr_length
							? { backgroundImage: `url(${props.fruitImages[index] || ''})` }
							: { background: 'rgba(60, 3, 215, .4)' }
						)
					}}>
					<a href={`https://en.wikipedia.org/wiki/${fruit}`} target="_blank" rel="noreferrer">
						{fruit}
					</a>
				</div>
				))}
			</div>
			</div>
		)
	} else {
		return (
			<h1 className={classes.not_found}>Fruits not found :(</h1>
		)
	}
};

export default Containers;