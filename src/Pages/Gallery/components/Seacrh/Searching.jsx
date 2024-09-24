import React, { useState } from "react";
import classes from '../../../../styles/Searching.module.css';

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
