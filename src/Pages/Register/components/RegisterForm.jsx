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
	const [visible_equal, setvisible_equal] = useState(false);
	const styles_equal = `${visible_equal ? classes.div_equal : classes.div_equal_hidden}`;
	const [text, settext] = useState('');

	if (rememberMe) {
		sessionStorage.setItem("email", email);
		sessionStorage.setItem("password", password);
	}

	function validatePassword(password) {
		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
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
						setvisible_equal(true);
						settext('Email already in use')
					}
					else {
						setvisible_equal(true);
						settext('Incorrect Email')
					}
				});
		} else {
			setvisible_equal(true);
			settext('Passwords must be equal and contain at least 1 upper and 1 lower case letter and number')
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
				<div className={styles_equal}>{text}</div>
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