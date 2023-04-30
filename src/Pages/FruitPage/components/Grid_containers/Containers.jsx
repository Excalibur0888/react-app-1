import React, { useEffect, useState } from 'react';
import classes from '../../../../styles/Containers.module.css';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setValueCopy, setFruitsImages, setBoxContent } from "../../../../store/slices/fruitsSlice";
import { useSelector } from "react-redux";

const Containers = () => {
	const dispatch = useDispatch();
	const { boxContent, valueCopy, fruitsImages } = useSelector(state => state.fruits);
	const arr_length = valueCopy.length
	const styles = `${boxContent.length === arr_length ? classes.box : classes.box_filtered}`
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get('http://localhost:5000/api')
			.then(response => {
				dispatch(setBoxContent(response.data.fruitNames));
				dispatch(setValueCopy(response.data.fruitNames));
				dispatch(setFruitsImages(response.data.fruitImages));
				setIsLoading(false)
			})
			.catch(error => alert('Something went wrong, please try again later', error));
	}, []);

	if (isLoading) {
		return (
			<div className={classes.loading__title}><br/>
			<h1 className={classes.loading__heading}>Fruits is loading, please stand by...</h1>
			<div className={classes.loading}></div>
			</div>
		)
	} else if (boxContent.length !== 0) {
		return (
			<div className='wrapper'>
			<h3 className={classes.container__name}>
				Some of this items are fruits, according to the scientific definition, but are sometimes considered to be fruits. <br/>
				The most popular types of fruits were presented here, a complete list can be found <a href='https://en.wikipedia.org/wiki/List_of_culinary_fruits' target='_blank'>here</a></h3>
			<div className={classes.container}>
				{boxContent.map((fruit, index) => (
					<div
					className={styles}
					key={index}
					style={{
						...(boxContent.length === arr_length
							? { backgroundImage: `url(${fruitsImages[index] || ''})` }
							: { background: 'rgb(65, 65, 65)' }
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
