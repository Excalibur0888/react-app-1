import React from "react";
import classes from "./InpageImg.module.css";

function InpageImg({bg}) {
  return (
    <div className={classes.inpage_img}>
      <img src={bg} alt="background" />
    </div>
  );
}

export default InpageImg;
