import React, { useState, useEffect } from "react";
import classes from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
	const dispatch = useDispatch();
	const push = useNavigate();
	const [email, setEmail] = useState('');
	const [confirmPassword, setconfirmPassword] = useState(''); 
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [visible, setvisible] = useState(false);
	const [visible_equal, setvisible_equal] = useState(false);
	const styles_err = `${visible ? classes.error_msg : classes.error_msg_hidden}`;
	const styles_equal = `${visible_equal ? classes.p_equal : classes.p_equal_hidden}`;

	if (rememberMe) {
		localStorage.setItem("email", email);
		localStorage.setItem("password", password);
	}

	const handleRegister = (e, email, password) => {
		e.preventDefault()
		if (password === confirmPassword) {
		const auth = getAuth();
		setPersistence(auth, browserSessionPersistence)
		createUserWithEmailAndPassword(auth, email, password)
		.then(({user}) => {
			dispatch(setUser({
				email: user.email,
				id: user.uid,
				token: user.accessToken,
			}));
			push('/')
		})
		.catch((error) => {
			console.error(error);
			if (error.code.includes('auth/email-already-in-use')) {
				setvisible(true);
			}
		});	
		}
		else {
			setvisible_equal(true)
		}
		}

		useEffect(() => {
			const storedEmail = localStorage.getItem("email");
			const storedPassword = localStorage.getItem("password");
			if (storedEmail && storedPassword) {
				setEmail(storedEmail);
				setPassword(storedPassword);
				setRememberMe(true);
			}
		}, []);

	return (
		<div className={classes.logregbox}>
		<div className={classes.formbox}>
		<form action="javascript:void(0)">
				<h2>Sign up</h2>
					<div className={classes.inputbox}>
						<span className={classes.icon}>
						<box-icon name='envelope' type='solid' color='rgba(255,255,255,1)'></box-icon>
						</span>
						<input 
						type='email' 
						value={email}
						placeholder=" "
						pattern='^[a-z0-9@.]+$'
						maxLength='30'
						onChange={(e)=>setEmail(e.target.value)}
						required
						/>
						<label>Email</label>
					</div>
					<p className={styles_err}>User with this email already exists</p>
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
						pattern="^[a-zA-Z0-9]$"
						title="Only English letters and numbers"
						onChange={(e)=>setPassword(e.target.value)}
						required
						/>
						<label>Password</label>
					</div>
					<p className={styles_equal}>Passwords must be equal</p>
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
						pattern="^[a-zA-Z0-9]$"
						placeholder=" "
						onChange={(e)=>setconfirmPassword(e.target.value)}
						required
						/>
						<label>Confirm password</label>
					</div>
					<div className={classes.rememberforgot}>
						<label><input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)}/>Remember me</label>
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