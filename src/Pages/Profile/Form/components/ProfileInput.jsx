import React from "react";
import defaultClasses from "../Form.module.css";

const ProfileInput = ({ label, type, value, onChange, placeholder, alwaysTransform, customClasses }) => {
  const appliedClasses = customClasses || defaultClasses;

  return (
    <div className={`${appliedClasses.inputbox} ${value ? appliedClasses.filled : ""} ${alwaysTransform ? appliedClasses.alwaysTransform : ""}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder || " "}
      />
    </div>
  );
};

export default ProfileInput;
