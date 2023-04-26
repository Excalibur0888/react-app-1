import React, { useState, useEffect } from "react";
import classes from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const dispatch = useDispatch();
	const push = useNavigate();
	const [visible, setvisible] = useState(false)
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const styles_err = `${visible ? classes.error_msg : classes.error_msg_hidden}`

	if (rememberMe) {
		localStorage.setItem("email", email);
		localStorage.setItem("password", password);
	}

	const handleLogin = (e, email, password) => {
		e.preventDefault()
		const auth = getAuth();
		setPersistence(auth, browserSessionPersistence)
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken,
				}));
				push('/');
			})
			.catch((error) => {
				console.error(error);
				if (error.code.includes('auth/user-not-found') || error.code.includes('auth/wrong-password') || error.code.includes('auth/invalid-email')) {
					setvisible(true);
				}
				else if(error.code.includes('auth/quota-exceeded') || error.code.includes('auth/too-many-requests')) {
					alert('Too many attempts, please try again later')
				}
			});
		}

		useEffect(() => {
			const storedEmail = localStorage.getItem("email");
			const storedPassword = localStorage.getItem("password");
			if (storedEmail && storedPassword) {
				setEmail(storedEmail);
				setPassword(storedPassword);
				setRememberMe(true);
		}}, []);

	return (
		<div className={classes.logregbox}>
		<div className={classes.formbox}>
			<form action="javascript:void(0)">
				<h2>Sign in</h2>
					<div className={classes.inputbox}>
						<span className={classes.icon}>
						<box-icon name='envelope' type='solid' color='rgba(255,255,255,1)'></box-icon>
						</span>
						<input 
						type='email' 
						value={email}
						onChange={(e)=>setEmail(e.target.value)}
						placeholder=" "
						pattern='^[a-z0-9@.]+$'
						required
						/>
						<label>Email</label>
					</div>
					<p className={styles_err}>Incorrect email or password</p>
					<div className={classes.inputbox}>
						<span className={classes.icon}>
						<box-icon name='lock-alt' type='solid' color='rgba(255,255,255,1)'></box-icon>
						</span>
						<input 
						type='password'
						value={password}
						placeholder=" "
						minLength='6'
						maxLength='15'
						pattern='^[a-zA-Z0-9]$'
						title="Only English letters and numbers"
						onChange={(e)=>setPassword(e.target.value)}
						required
						/>
						<label>Password</label>
					</div>
					<div className={classes.rememberforgot}>
						<label><input type="checkbox" onChange={(e) => setRememberMe(e.target.checked)}/>Remember me</label>
					</div>
				<button 
				type='button' 
				className={classes.btn}
				onClick={(e) => handleLogin(e, email, password)}
				>Sign in</button>
				<div className={classes.loginregister}>
					<p>Don't have an account? <Link to='/register'>Sign up</Link></p>
				</div>
			</form>
		</div>
	</div>
	)
}

export default LoginForm;