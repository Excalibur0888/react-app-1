import React from "react";
import classes from "../Form.module.css";

const ProfileInput = ({ label, type, value, onChange, placeholder, alwaysTransform }) => (
  <div className={`${classes.inputbox} ${value ? classes.filled : ""} ${alwaysTransform ? classes.alwaysTransform : ""}`}>
    <label>{label}</label>
    <input
      type={type}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder || " "}
    />
  </div>
);

export default ProfileInput;
