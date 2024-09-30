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
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    if (rememberMe) {
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
    } else {
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
                    // Установите текст ошибки в зависимости от кода ошибки
                    setVisible(true);
                    if (error.code.includes("auth/email-already-in-use")) {
                        setErrorMessage('Email уже используется');
                    } else {
                        setErrorMessage('Некорректный Email');
                    }
                });
        } else if (password !== confirmPassword) {
            setVisible(true);
            setErrorMessage('Пароли должны совпадать');
        } else {
            setVisible(true);
            setErrorMessage('Пароль содержит менее 8 символов');
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
    }, [dispatch]);

    return (
        <div className={classes.logregbox}>
            <div className={classes.formbox}>
                <form>
                    <h2>Регистрация</h2>
                    <div className={classes.inputbox}>
                        <span className={classes.icon}>
                            <box-icon name='envelope' type='solid' color='rgba(255,255,255,1)'></box-icon>
                        </span>
                        <input 
                            type='email' 
                            value={email}
                            placeholder=" "
                            maxLength='30'
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                            required
                        />
                        <label>Email</label>
                    </div>
                    <div className={classes.inputbox}>
										<p className={visible ? classes.error_msg : classes.error_msg_hidden}>{errorMessage}</p>
                        <span className={classes.icon}>
                            <box-icon type='solid' name='user' color='rgba(255,255,255,1)'></box-icon>
                        </span>
                        <input 
                            type='password' 
                            value={password}
                            minLength='6'
                            maxLength='15'
                            placeholder=" "
                            title="Только английские буквы и цифры"
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                            required
                        />
                        <label>Пароль</label>
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
                            title="Только английские буквы и цифры"
                            placeholder=" "
                            onChange={(e) => dispatch(setconfirmPassword(e.target.value))}
                            required
                        />
                        <label>Подтвердить пароль</label>
                    </div>
                    <div className={classes.rememberforgot}>
                        <label>
                            <input type="checkbox" checked={rememberMe} onChange={e => dispatch(setRememberMe(e.target.checked))} />
                            Запомнить меня
                        </label>
                    </div>
                    <button 
                        type='submit' 
                        className={classes.btn}
                        onClick={(e) => handleRegister(e, email, password)}
                    >
                        Зарегистрироваться
                    </button>
                    <div className={classes.loginregister}>
                        <p>Уже есть аккаунт? <Link to='/auth/login'>Войти</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;
