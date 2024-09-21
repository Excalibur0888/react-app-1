import React from "react";
import classes from './Suggestions.module.css';

export default function PairContainer({ align, videoSrc, title, text, videoClass, refElement }) {
  return (
    <div className={`${classes.pairContainer} ${align === 'left' ? classes.leftAlign : classes.rightAlign}`} ref={refElement}>
      {align === 'left' ? (
        <>
          <div className={`${classes.videoItem} ${videoClass}`}>
					<div className={`${classes.corner} ${classes.topRight}`}></div>
					<div className={`${classes.corner} ${classes.bottomLeft}`}></div>
            <video autoPlay muted loop>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
          <div className={classes.textItem}>
            <h1>{title}</h1>
            {text}
          </div>
        </>
      ) : (
        <>
          <div className={classes.textItem}>
            <h1>{title}</h1>
            {text}
          </div>
          <div className={`${classes.videoItem} ${videoClass}`}>
						<div className={`${classes.corner} ${classes.topRight}`}></div>
						<div className={`${classes.corner} ${classes.bottomLeft}`}></div>
            <video autoPlay muted loop>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </>
      )}
    </div>
  );
}
