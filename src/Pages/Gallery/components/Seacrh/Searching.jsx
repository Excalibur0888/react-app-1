import React, { useState, useCallback } from "react";
import classes from '../../../../styles/Searching.module.css';
import "boxicons";

const Searching = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className={classes.wrapper}>
			<input
				type="text"
				placeholder="Search for vegetable"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				autoFocus
				className={classes.search_bar}
			/>
			<button
				type="button"
				className={classes.start_searching_btn}
			>
				<box-icon name="search" color="rgb(1, 1, 1)"></box-icon>
			</button>
			<button
				type="button"
				className={classes.cancel_search}
				title="cancel"
			>
				✖
			</button>
		</div>
	);
};

export default Searching;
