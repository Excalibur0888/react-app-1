import React, { useState, useEffect } from "react";
import classes from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from '../../../store/slices/userSlice';
import { setEmail, setPassword, setRememberMe, setconfirmPassword } from "../../../store/slices/registerSlice";
import { useSelector } from "react-redux";
import { getAuth, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
	const dispatch = useDispatch();
	const push = useNavigate();
	const { email, password, rememberMe, confirmPassword } = useSelector(state => state.register);
	const [visible, setvisible] = useState(false);
	const styles_err = `${visible ? classes.error_msg : classes.error_msg_hidden}`
	const [text, settext] = useState('');

	if (rememberMe) {
		sessionStorage.setItem("email", email);
		sessionStorage.setItem("password", password);
	}
	else {
		sessionStorage.removeItem(email);
		sessionStorage.removeItem(password);
	}

	function validatePassword(password) {
		const regex = /^[a-zA-Z\d\W_]{8,}$/;
		return regex.test(password);
	}

	const handleRegister = (e, email, password) => {
		e.preventDefault();
		if (password === confirmPassword && validatePassword(password)) {
			const auth = getAuth();
			setPersistence(auth, browserSessionPersistence);
			createUserWithEmailAndPassword(auth, email, password)
				.then(({ user }) => {
					dispatch(
						setUser({
							email: user.email,
							id: user.uid,
							token: user.accessToken,
						})
					);
					push("/");
				})
				.catch((error) => {
					if (error.code.includes("auth/email-already-in-use")) {
						setvisible(true);
						settext('Email already in use')
					}
					else {
						setvisible(true);
						settext('Incorrect Email')
					}
				});
		} else if (password !== confirmPassword) {
			setvisible(true);
			settext('Passwords must be equal')
		} else {
			setvisible(true);
			settext('Password must be at least 8 characters');
		}
	};

		useEffect(() => {
			const storedEmail = sessionStorage.getItem("email");
			const storedPassword = sessionStorage.getItem("password");
			if (storedEmail && storedPassword) {
				dispatch(setEmail(storedEmail));
				dispatch(setPassword(storedPassword));
				dispatch(setRememberMe(true));
			}
		}, []);

	return (
		<div className={classes.logregbox}>
		<div className={classes.formbox}>
		<form>
				<h2>Sign up</h2>
					<div className={classes.inputbox}>
						<span className={classes.icon}>
						<box-icon name='envelope' type='solid' color='rgba(255,255,255,1)'></box-icon>
						</span>
						<input 
						type='email' 
						value={email}
						placeholder=" "
						maxLength='30'
						onChange={(e)=>dispatch(setEmail(e.target.value))}
						required
						/>
						<label>Email</label>
					</div>
					<div className={classes.inputbox}>
						<span className={classes.icon}>
						<box-icon type='solid' name='user' color='rgba(255,255,255,1)'></box-icon>
						</span>
						<input 
						type='password' 
						value={password}
						minLength='6'
						maxLength='15'
						placeholder=" "
						title="Only English letters and numbers"
						onChange={(e)=>dispatch(setPassword(e.target.value))}
						required
						/>
						<label>Password</label>
						<p className={styles_err}>{text}</p>
					</div>
					<div className={classes.inputbox}>
						<span className={classes.icon}>
						<box-icon name='lock-alt' type='solid' color='rgba(255,255,255,1)'></box-icon>
						</span>
						<input 
						type='password' 
						value={confirmPassword}
						minLength='6'
						maxLength='15'
						title="Only English letters and numbers"
						placeholder=" "
						onChange={(e)=> dispatch(setconfirmPassword(e.target.value))}
						required
						/>
						<label>Confirm password</label>
					</div>
					<div className={classes.rememberforgot}>
						<label><input type="checkbox" checked={rememberMe} onChange={e => dispatch(setRememberMe(e.target.checked))}/>Remember me</label>
					</div>
				<button 
				type='submit' 
				className={classes.btn}
				onClick={(e) => handleRegister(e, email, password)}
				>Sign up</button>
				<div className={classes.loginregister}>
					<p>Already have an account? <Link to='/login'>Sign in</Link></p>
				</div>
			</form>
		</div>
	</div>
	)
}

export default RegisterForm;