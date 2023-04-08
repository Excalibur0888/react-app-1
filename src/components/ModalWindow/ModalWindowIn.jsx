import React, { useEffect, useState } from "react";
import classes from './ModalWindowIn.module.css';
import { Cookies } from 'react-cookie';

const ModalWindowIn = (props) => {
	const style = `${props.value ? classes.wrapper_invisible : classes.wrapper_visible}`
	const [showPassword, setShowPassword] = useState(false);
	function cancel_searching () {
		props.funcscroll(true)
		props.func(true)
	}
	function show_pass (e) {
		setShowPassword(!showPassword)
		e.preventDefault()
	}
	const [name, setName] = useState('');
	const [password, setPassword] = useState('')
	const [rememberMe, setRememberMe] = useState(false);
	const handleSubmit = () => {
    if (rememberMe) {
      localStorage.setItem('name', name);
      localStorage.setItem('password', password);
    }
  };
	useEffect(() => {
    // загружаем сохраненные данные, если пользователь выбрал "Запомнить меня"
    const savedName = localStorage.getItem('name');
    const savedPassword = localStorage.getItem('password');
    if (savedName && savedPassword) {
      setName(savedName);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);
	const cookies = new Cookies();
	function handleSubmitForm(event) {
		event.preventDefault();
		const cookie_login = cookies.get('Username');
		const cookie_password = cookies.get('Password');
		if (cookie_login && password) {
			if (cookie_login === name && cookie_password === password) {
				alert('ok')
			}
			else {
				alert('no')
			}
		} 
	}

	return (
		<div className={style}>
			<button onClick = {cancel_searching} className={classes.cancel_modal}>{props.children}</button>
			<form className={classes.form} onSubmit={handleSubmitForm}>
				<h2 className={classes.tip}>Already have an account? Sign in.</h2>
				<input 
				type="text" 
				name="username" 
				value={name} 
				onChange={e => {setName(e.target.value)}} 
				placeholder="Username" 
				className={classes.login_input} 
				minlength="3" 
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
				className={classes.password_input} 
				minlength="7" 
				pattern="[a-zA-Zа-яА-Я0-9]+" 
				title="Only English or Russian letters and numbers"
				required
				/>
				<button className={classes.showing_btn} onClick={show_pass}>
        {showPassword ? 'Hide' : 'Show'}
      	</button>
				<div className={classes.remember_checkbox}>
				<input 
				type="checkbox"
				checked={rememberMe}
				onChange={(e) => setRememberMe(e.target.checked)}
				/><label for="checkbox">Remember me</label><br/>
				<button type="submit" className={classes.submit} onClick={handleSubmit}>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default ModalWindowIn;