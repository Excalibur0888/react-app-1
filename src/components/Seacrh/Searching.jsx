import React, { useState } from "react";
import classes from './Searching.module.css';

const Searching = (props) => {
	const [searchQuery, setsearchQuery] = useState('')
	const [visible, setvisible] = useState(false)
	const style = `${visible ? classes.cancel_search : classes.cancel_search_invisible}`
	
	function cancel_searching () {
		props.funcSearching(props.valueCopy)
		setsearchQuery('')
	}
	function find_box () {
		const found_fruit = props.value.filter(item => item.toLowerCase().startsWith(searchQuery.toLowerCase()))
		props.funcSearching(found_fruit)
	}

	function become_visible () {
		setvisible(true)
	}

	return (
		<div className={classes.wrapper}>
		<input type='text' placeholder="Search for fruit" value={searchQuery} onFocus={become_visible} onChange={e => {setsearchQuery(e.target.value)}} className={classes.search_bar}/>
		<button type="button" onClick={find_box} className={classes.start_searching_btn} title="cancel">🔍</button>
		<button type="button" onClick={cancel_searching} className={style}>✖</button>
		</div>
	)
};

export default Searching;