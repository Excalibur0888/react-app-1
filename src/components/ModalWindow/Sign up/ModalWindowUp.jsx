import React, { useState } from "react";
import classes from './ModalWindowUp.module.css';

const ModalWindowUp = (props) => {
	const style = `${props.value ? classes.wrapper_invisible : classes.wrapper_visible}`
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState('')
	const [name, setName] = useState('');
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('');
	function cancel_searching () {
		props.funcscroll(true)
		props.funcsetvisup(true)
	}
	function show_pass (e) {
		setShowPassword(!showPassword)
		e.preventDefault()
	}

	function handleSubmit (e) {
		if (password !== confirmPassword) {
			alert('Error: Passwords must be equal')
			e.preventDefault();
		}
	};

	/* куки файлы */
	const expirationDate = new Date('Wed, 01-Jan-2024 12:00:00 GMT');
	function set_cookie () {
	document.cookie = `Username=${name}; expires=${expirationDate.toUTCString()}; path=/`;
	document.cookie = `Email=${email}; expires=${expirationDate.toUTCString()}; path=/`;
	document.cookie = `Password=${password}; expires=${expirationDate.toUTCString()}; path=/`;
	}

	return (
		<div className={style}>
			<button onClick={cancel_searching} className={classes.cancel_modal}>{props.children}</button>
			<form className={classes.form} onSubmit={set_cookie}>
			<h2 className={classes.tip}>First time here? Sign up.</h2>
				<input 
				type="email" 
				name="email" 
				placeholder="Email" 
				value={email} 
				onChange={e => {setEmail(e.target.value)}}
				className={`${classes.input} ${classes.email}`}
				title="Your email"
				pattern="[a-zA-Z@.]+"
				required
				/>
				<input
				type="text" 
				name="username" 
				value={name} 
				onChange={e => {setName(e.target.value)}} 
				placeholder="Username" 
				className={`${classes.input} ${classes.login}`}
				minLength="3" 
				maxLength="10"
				pattern="[a-zA-Zа-яА-Я0-9]+" 
				title="Only English or Russian letters and numbers"
				required
				/>
				<input 
				type={showPassword ? 'text' : 'password'} 
				name="userpassword" 
				value={password} 
				onChange={e => {setPassword(e.target.value)}} 
				placeholder="Password" 
				className={`${classes.input} ${classes.password}`}
				minLength="7" 
				maxLength="20"
				pattern="[a-zA-Zа-яА-Я0-9]+" 
				title="Only English or Russian letters and numbers"
				required
				/>
				<input 
				type="password" 
				name="confirmPassword" 
				value={confirmPassword} 
				onChange={e => {setConfirmPassword(e.target.value)}} 
				placeholder="Confirm password"
				className={`${classes.input} ${classes.password_confirm}`}
				title="Only English or Russian letters and numbers"
				required
				/>
				<button className={classes.showing_btn} onClick={show_pass}>
        {showPassword ? 'Hide' : 'Show'}
      	</button>
				<button type="submit" className={classes.submit} onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	)
}

export default ModalWindowUp;