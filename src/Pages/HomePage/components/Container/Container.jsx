import React from "react";
import { useAuth } from '../../../../hooks/use-auth'
import classes from './Container.module.css';
import 'boxicons'
import Header from "../../../../components/Header";

const Container = () => {
  const { isAuth, email } = useAuth();

  return (
    <div className={classes.container}>
      <video autoPlay loop muted>
        <source src={'https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/01_Intro/comp/Bugatti_Tourbillon_01_PP_Intro_d.mp4'} type="video/mp4" />
      </video>
      <Header />
      {isAuth ? (
        <div>
				<h1>4Motion - life has a style</h1>
				<h2>Лучший тюнинг-салон России</h2>
				<div className={classes.button}>
				<a className={classes.btn} href="javascript:;" data-fancybox="" data-src="#contacts-modal">
					<p>Сделай этот шаг</p>
					<span className={classes.item1}></span>
					<span className={classes.item2}></span>
					<span className={classes.item3}></span>      
					<span className={classes.item4}></span>                 
				</a>
				</div>
			</div>
      ) : (
        <div>
          <h1>4Motion - life has a style</h1>
          <h2>Лучший тюнинг-салон России</h2>
					<div className={classes.button}>
					<a className={classes.btn} href="javascript:;" data-fancybox="" data-src="#contacts-modal">
						<p>Сделай этот шаг</p>
						<span className={classes.item1}></span>
						<span className={classes.item2}></span>
						<span className={classes.item3}></span>      
						<span className={classes.item4}></span>                 
					</a>
					</div>
        </div>
      )}
    </div>
  );
};

export default Container;