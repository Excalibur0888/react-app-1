import React, { useEffect, useState } from 'react';
import './HomePage.css';
import classes from '../../styles/Button.module.css';
import Container from './components/Container/Container';
import Headings from './components/Headings/Headings';
import { Helmet } from "react-helmet";
import Links from './components/Links/Links';
import logo from '../../img/logo.png';

const HomePage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
	
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="HomePage">
      <Helmet>
        <title>4MOTION</title>
				<link rel="icon" type="image/png" href={logo} />
      </Helmet>
			<Links/>
      <Container />
      <Headings />
      <div
        className={`${classes.up} ${showScrollButton ? classes.active : ''}`}
        id="scroll_to_up"
        onClick={scrollToTop}
      >
        <span className={classes.item1}></span>
        <span className={classes.item2}></span>
        <span className={classes.item3}></span>
        <span className={classes.item4}></span>
      </div>
    </div>
  );
};

export default HomePage;
