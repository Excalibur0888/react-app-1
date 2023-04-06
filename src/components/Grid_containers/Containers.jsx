import React from "react";
import classes from './Containers.module.css';

const Containers = (props) => {
		if (props.value.length !== 0) {
		return (
		<div className={classes.container}>
      {props.value.map((fruit) => (
        <div className={classes.box}>
					<a href={`https://en.wikipedia.org/wiki/${fruit}`} target="_blank" rel="noreferrer">
          {fruit}
					</a>
        </div>
      ))}
    </div>
		)
		}
		else {
			return (
			<h1 className={classes.not_found}>Fruits not found :(</h1>
			)
		}
};
export default Containers;