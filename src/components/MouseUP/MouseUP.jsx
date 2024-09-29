import React, {useEffect, useState} from 'react';
import classes from '../../styles/Button.module.css'

function MouseUp() {
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
	);
}

export default MouseUp;