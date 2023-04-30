import React, { useEffect, useState } from 'react';
import classes from '../../../../styles/Containers.module.css';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setValueCopy, setVegetablesImages, setBoxContent } from "../../../../store/slices/vegetablesSlice";
import { useSelector } from "react-redux";

const Containers = () => {
	const dispatch = useDispatch();
	const { boxContent, valueCopy, vegetablesImages } = useSelector(state => state.vegetables);
	const arr_length = valueCopy.length
	const styles = `${boxContent.length === arr_length ? classes.box : classes.box_filtered}`
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get('http://localhost:5001/vegetables')
			.then(response => {
				dispatch(setBoxContent(response.data.vegNames));
				dispatch(setValueCopy(response.data.vegNames));
				dispatch(setVegetablesImages(response.data.vegImages));
				setIsLoading(false)
			})
			.catch(error => alert('Something went wrong, please try again later', error));
	}, []);

	if (isLoading) {
		return (
			<div className={classes.loading__title}><br/>
			<h1 className={classes.loading__heading}>Vegetables is loading, please stand by...</h1>
			<div className={classes.loading}></div>
			</div>
		)
	} else if (boxContent.length !== 0) {
		return (
			<div className='wrapper'>
			<h3 className={classes.container__name}>
				Some of this items are fruits, according to the scientific definition, but sometimes considered to be vegetables. <br/>
				The most popular types of vegetables were presented here, a complete list can be found <a href='https://en.wikipedia.org/wiki/List_of_culinary_vegetables' target='_blank'>here</a></h3>
			<div className={classes.container}>
				{boxContent.map((vegetable, index) => (
					<div
					className={styles}
					key={index}
					style={{
						...(boxContent.length === arr_length
							? { backgroundImage: `url(${vegetablesImages[index] || ''})` }
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
