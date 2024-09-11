import React, { useEffect, useState } from 'react';
import classes from '../../../../styles/Containers.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setValueCopy, setFlowersImages, setBoxContent } from "../../../../store/slices/flowersSlice";
import LoadingPage from '../../../LoadingPage/LoadingPage';

const Containers = () => {
	const dispatch = useDispatch();
	const { boxContent, valueCopy, flowersImages } = useSelector(state => state.flowers);
	const arr_length = valueCopy.length
	const styles = `${boxContent.length === arr_length ? classes.box : classes.box_filtered}`
	const [isLoading, setIsLoading] = useState(true)
	const [loadingPageTitle, setLoadingPageTitle] = useState("Flowers is loading, please stand by")

	useEffect(() => {
		axios.get('http://localhost:5001/flowers')
			.then(response => {
				setIsLoading(false)
				dispatch(setBoxContent(response.data.flowNames));
				dispatch(setValueCopy(response.data.flowNames));
				dispatch(setFlowersImages(response.data.flowImages));
			})
			.catch(() => setLoadingPageTitle("An error occured, please try again later"));
	}, []);

		if (isLoading) {
			return (
				<LoadingPage title={loadingPageTitle}/>
			)
		} else if (boxContent.length !== 0) {
			return (
				<div className='wrapper'>
				<h3 className={classes.container__name}>
					The most popular types of flowers were presented here, a complete list can be found <a href='https://en.wikipedia.org/wiki/Category:Lists_of_flowers' target='_blank' rel='noreferrer'>here</a></h3>
				<div className={classes.container}>
					{boxContent.map((flower, index) => (
						<div
						className={styles}
						key={index}
						style={{
							...(boxContent.length === arr_length
								? { backgroundImage: `url(${flowersImages[index] || ''})` }
								: { background: 'rgb(65, 65, 65)' }
							)
						}}>
						<a href={`https://en.wikipedia.org/wiki/${flower}`} target="_blank" rel="noreferrer">
							{flower}
						</a>
					</div>
					))}
				</div>
				</div>
			)
		} else {
			return (
				<h1 className={classes.not_found}>Flowers not found :(</h1>
			)
		}
};

export default Containers;
