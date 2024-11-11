import React from 'react';
import classes from './Search.module.css';

function Search({ onSearchChange }) {
	return ( 
		<div className={classes.search}>
			<input 
				type='text' 
				name='query' 
				placeholder='Введите название работы'
				onChange={onSearchChange}
			/>
			<button className={classes.search__btn}>
				<span className={classes.search__line}></span>
			</button>
		</div>
	);
}

export default Search;
