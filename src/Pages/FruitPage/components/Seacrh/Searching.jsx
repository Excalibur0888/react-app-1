import React, { useState } from "react";
import classes from './Searching.module.css';
import 'boxicons'

const Searching = (props) => {
	const [searchQuery, setsearchQuery] = useState('')
	const [visible, setvisible] = useState(false)

	const style = `${visible ? classes.cancel_search : classes.cancel_search_invisible}`
	const style_searching = `${props.visible ? (props.clicked ? classes.wrapper_in_burger: classes.wrapper_hidden) : classes.wrapper}`
	function cancel_searching () {
		props.funcSearching(props.valueCopy)
		setsearchQuery('')
	}
	function find_box () {
		props.funcSearching(props.value.filter(item => item.toLowerCase().startsWith(searchQuery.toLowerCase())))
	}

	function become_visible () {
		setvisible(true)
	}

	return (
		<div className={style_searching}>
		<input type='text' placeholder="Search for fruit" value={searchQuery} onFocus={become_visible} onChange={e => {setsearchQuery(e.target.value)}} className={classes.search_bar}/>
		<button type="button" onClick={find_box} className={classes.start_searching_btn} title="cancel"><box-icon name='search' color='rgb(1, 1, 1)'></box-icon></button>
		<button type="button" onClick={cancel_searching} className={style}>✖</button>
		</div>
	)
};

export default Searching;