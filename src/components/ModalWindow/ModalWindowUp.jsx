import React from "react";
import classes from './ModalWindowUp.module.css';

const ModalWindowUp = (props) => {
	const style = `${props.value ? classes.wrapper_invisible : classes.wrapper_visible}`
	function cancel_searching () {
		props.func(true)
	}
	return (
		<div className={style}>
			<button onClick={cancel_searching} className={classes.cancel_modal}>✖</button>
			<form className={classes.form}>
			</form>
		</div>
	)
}

export default ModalWindowUp;