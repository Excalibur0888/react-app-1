import React, { useState } from "react";
import classes from './Searching.module.css';

const Searching = (props) => {
	const [searchQuery, setsearchQuery] = useState('')
	const [visible, setvisible] = useState(false)
	const style = `${visible ? classes.cancel_search : classes.cancel_search_invisible}`
	const old_arr = ['Apple', 'Orange (fruit)', 'Banana', 'Pineapple', 'Cherry', 'Mandarin', 'Raspberries', 'Melon', 'Watermelon', 'Strawberry', 'Grape', 'Blackberry', 'Lime', 'Coconut', 'Lemon']
	function cancel_searching () {
		props.func(old_arr)
		setsearchQuery('')
	}
	function find_box () {
		props.func(props.value.filter(item => item.toLowerCase().startsWith(searchQuery.toLowerCase())))
	}

	function become_visible () {
		setvisible(true)
	}

	return (
		<div className={classes.wrapper}>
		<input type='text' placeholder="Search..." value={searchQuery} onMouseDown={become_visible} onChange={e => {setsearchQuery(e.target.value)}} className={classes.search_bar}/>
		<button onClick={find_box} className={classes.start_searching_btn}>🔍</button>
		<button onClick={cancel_searching} className={style}>✖</button>
		</div>
	)
};

export default Searching;