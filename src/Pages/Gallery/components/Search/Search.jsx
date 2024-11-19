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
			<div className={classes.search__btn}>
				<span className={classes.search__line}></span>
			</div>
		</div>
	);
}

export default Search;
