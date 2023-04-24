import React, { useEffect, useState } from 'react';
import classes from './Containers.module.css';
import axios from 'axios';

const Containers = (props) => {
	const arr_length = props.valueCopy.length
	const styles = `${props.value.length === arr_length ? classes.box : classes.box_filtered}`
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get('http://localhost:5001/vegetables')
			.then(response => {
				setIsLoading(false)
				props.funcsetBoxContent(response.data.vegNames);
				props.setValueCopy(response.data.vegNames);
				props.setvegetablesImages(response.data.vegImages);
			})
			.catch(error => console.error(error));
	}, []);

		if (isLoading) {
			return (
				<div className={classes.loading__title}><br/>
				<h1 className={classes.loading__heading}>Vegetables is loading, please stand by...</h1>
				<div className={classes.loading}></div>
				</div>
			)
		} else if (props.value.length !== 0) {
			return (
				<div className='wrapper'>
				<h3 className={classes.container__name}>
					Some of this items considered to be vegetables, but according to the scientific definition some of them are frutis. <br/>
					The most popular types of vegetables were presented here, a complete list can be found <a href='https://en.wikipedia.org/wiki/List_of_vegetables' target='_blank'>here</a></h3>
				<div className={classes.container}>
					{props.value.map((vegetable, index) => (
						<div
						className={styles}
						key={index}
						style={{
							...(props.value.length === arr_length
								? { backgroundImage: `url(${props.vegetablesImages[index] || ''})` }
								: { background: 'rgb(65, 65, 65)' }
							)
						}}>
						<a href={`https://en.wikipedia.org/wiki/${vegetable}`} target="_blank" rel="noreferrer">
							{vegetable}
						</a>
					</div>
					))}
				</div>
				</div>
			)
		} else {
			return (
				<h1 className={classes.not_found}>Vegetables not found :(</h1>
			)
		}
};

export default Containers;
