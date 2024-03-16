import React, { useEffect, useState } from 'react';
import classes from '../../../../styles/Containers.module.css';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setValueCopy, settreesImages, setBoxContent } from "../../../../store/slices/treesSlice";
import { useSelector } from "react-redux";

const Containers = () => {
	const dispatch = useDispatch();
	const { boxContent, valueCopy, treesImages } = useSelector(state => state.trees);
	const arr_length = valueCopy.length
	const styles = `${boxContent.length === arr_length ? classes.box : classes.box_filtered}`
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get('http://localhost:5003/trees')
			.then(response => {
				dispatch(setBoxContent(response.data.treeNames));
				dispatch(setValueCopy(response.data.treeNames));
				dispatch(settreesImages(response.data.treeImages));
				setIsLoading(false)
			})
			.catch(error => null);
	}, []);

	if (isLoading) {
		return (
			<div className={classes.loading__title}><br/>
			<h1 className={classes.loading__heading}>Trees is loading, please stand by...</h1>
			<div className={classes.loading}></div>
			</div>
		)
	} else if (boxContent.length !== 0) {
		return (
			<div className='wrapper'>
			<h3 className={classes.container__name}>
				Some pictures show fruits for a better understanding of which tree we are talking about<br/>
				The most popular types of trees were presented here, a complete list can be found <a href='https://en.wikipedia.org/wiki/List_of_trees' target='_blank'>here</a></h3>
			<div className={classes.container}>
				{boxContent.map((tree, index) => (
					<div
					className={styles}
					key={index}
					style={{
						...(boxContent.length === arr_length
							? { backgroundImage: `url(${treesImages[index] || ''})` }
							: { background: 'rgb(65, 65, 65)' }
						)
					}}>
					<a href={`https://en.wikipedia.org/wiki/${tree}`} target="_blank" rel="noreferrer">
						{tree}
					</a>
				</div>
				))}
			</div>
			</div>
		)
	} else {
		return (
			<h1 className={classes.not_found}>trees not found :(</h1>
		)
	}
};

export default Containers;
