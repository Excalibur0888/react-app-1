import React, { useState } from "react";
import classes from './ModalWindowIn.module.css';

const ModalWindowIn = (props) => {
	const style = `${props.value ? classes.wrapper_invisible : classes.wrapper_visible}`
	const [showPassword, setShowPassword] = useState(false);
	function cancel_searching () {
		props.funcscroll(true)
		props.func(true)
	}
	function btn_func (e) {
		setShowPassword(!showPassword)
		e.preventDefault()
	}
	return (
		<div className={style}>
			<button onClick = {cancel_searching} className={classes.cancel_modal}>{props.children}</button>
			<form className={classes.form}>
				<h2 className={classes.tip}>Already have an account? Sign in.</h2>
				<input type="text" placeholder="Login" className={classes.login_input}/>
				<input type={showPassword ? 'text' : 'password'} placeholder="Password" className={classes.password_input}/>
				<button className={classes.showing_btn} onClick={btn_func}>
        {showPassword ? 'Hide' : 'Show'}
      	</button>
				<div className={classes.remember_checkbox}>
				<input type="checkbox"/><label>Remember me</label>
				</div>
			</form>
		</div>
	)
}

export default ModalWindowIn;