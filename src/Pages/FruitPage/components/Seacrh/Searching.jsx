import React, { useState, useCallback } from "react";
import classes from '../../../../styles/Searching.module.css';
import 'boxicons'
import { useDispatch } from "react-redux";
import { setBoxContent } from "../../../../store/slices/fruitsSlice";
import { useSelector } from "react-redux";

const Searching = () => {
	const dispatch = useDispatch();
	const { boxContent, valueCopy } = useSelector(state => state.fruits);
	const [searchQuery, setSearchQuery] = useState("");

	const handleCancelSearch = useCallback(() => {
		dispatch(setBoxContent(valueCopy));
		setSearchQuery("");
	}, [valueCopy]);

	const handleSearch = useCallback(() => {
		dispatch(setBoxContent(
			boxContent.filter((item) =>
				item.toLowerCase().startsWith(searchQuery.toLowerCase())
			)
		));
	}, [searchQuery]);

	const handleKeyPress = useCallback(
		(event) => {
			if (event.key === "Enter") {
				handleSearch();
			}
		},
		[handleSearch]
	);


	return (
		<div className={classes.wrapper}>
			<input
				type="text"
				placeholder="Search for fruit"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				onKeyDown={handleKeyPress}
				autoFocus
				className={classes.search_bar}
			/>
			<button
				type="button"
				onClick={handleSearch}
				className={classes.start_searching_btn}
			>
				<box-icon name="search" color="rgb(1, 1, 1)"></box-icon>
			</button>
			<button
				type="button"
				onClick={handleCancelSearch}
				className={classes.cancel_search}
				title="cancel"
			>
				✖
			</button>
		</div>
	)
};

export default Searching;