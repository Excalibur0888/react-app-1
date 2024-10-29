// Form/components/ProfileInput.js
import React from "react";
import classes from "../Form.module.css";

const ProfileInput = ({ label, type, value, onChange, placeholder }) => (
  <div className={classes.inputbox}>
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
