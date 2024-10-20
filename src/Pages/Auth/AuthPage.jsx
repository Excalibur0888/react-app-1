import React from 'react';
import { useParams } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Header from '../../components/Header';
import Social from '../../components/Footer/Social'
import BorderLB from '../../components/LineBorders/BorderLB';
import BorderLT from '../../components/LineBorders/BorderLT';
import BorderRB from '../../components/LineBorders/BorderRB';
import BorderRT from '../../components/LineBorders/BorderRT';
import classes from './AuthPage.module.css';

const AuthPage = () => {
  const { authType } = useParams();
  
  return (
    <div className={classes.AuthPage}>
      <Header />
      <div className={classes.background}></div>
      <div className={classes.container}>
				<h1>4Motion</h1>
				<Social className={classes.auth__social}/>
        <BorderLB />
        <BorderLT />
        <BorderRB />
        <BorderRT />
        {authType === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthPage;
