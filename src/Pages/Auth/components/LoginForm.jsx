import React, { useState, useEffect, useRef } from "react";
import classes from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from '../../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { setEmail, setPassword, setRememberMe } from "../../../store/slices/loginSlice";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const dispatch = useDispatch();
	const push = useNavigate();
	const passwordInputRef = useRef(null); 
	const [visible, setIsErrorVisible] = useState(false);
	const [errorType, setErrorType] = useState(null);
	const { email, password, rememberMe } = useSelector(state => state.login);

	if (rememberMe) {
		sessionStorage.setItem("email", email);
		sessionStorage.setItem("password", password);
	} else {
		sessionStorage.removeItem(email);
		sessionStorage.removeItem(password);
	}

	const handleLogin = (e, email, password) => {
		e.preventDefault();
		const auth = getAuth();
		setPersistence(auth, browserSessionPersistence)
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken,
				}));
				push('/profile');
			})
			.catch((error) => {
				console.error(error);
				if (error.code.includes('auth/user-not-found') || error.code.includes('auth/wrong-password') || error.code.includes('auth/invalid-email')) {
					setIsErrorVisible(true);
					setErrorType('login');

					dispatch(setPassword(''));
					passwordInputRef.current.focus();
				} else if (error.code.includes('auth/quota-exceeded') || error.code.includes('auth/too-many-requests')) {
					setIsErrorVisible(true);
					setErrorType('quota');
				}
			});
	}

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
					<h2>Вход</h2>
					<div className={classes.inputbox}>
						<span className={classes.icon}>
							<box-icon name='envelope' type='solid' color='rgba(255,255,255,1)'></box-icon>
						</span>
						<input
							type='email'
							value={email}
							onChange={(e) => dispatch(setEmail(e.target.value))}
							placeholder=" "
							pattern='^[a-z0-9@.]+$'
							required
						/>
						<label>Логин</label>
					</div>
					<div className={classes.inputbox}>
						<p className={visible ? classes.error_msg : classes.error_msg_hidden}>
							{errorType === 'login' ? 'Неверный логин или пароль' : 'Слишком много попыток. Попробуйте позже.'}
						</p>
						<span className={classes.icon}>
							<box-icon name='lock-alt' type='solid' color='rgba(255,255,255,1)'></box-icon>
						</span>
						<input
							ref={passwordInputRef}  // Привязываем реф к полю пароля
							type='password'
							value={password}
							placeholder=" "
							minLength='6'
							maxLength='15'
							pattern='^[a-zA-Z0-9]+$'
							title="Only English letters and numbers"
							onChange={(e) => dispatch(setPassword(e.target.value))}
							required
						/>
						<label>Пароль</label>
					</div>
					<div className={classes.rememberforgot}>
						<label><input type="checkbox" onChange={(e) => dispatch(setRememberMe(e.target.checked))} />Запомнить меня</label>
					</div>
					<button
						type='button'
						className={classes.btn}
						onClick={(e) => handleLogin(e, email, password)}
					>Войти</button>
					<div className={classes.loginregister}>
						<p>Нет аккаунта? <Link to='/auth/register'>Зарегистрироваться</Link></p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginForm;
