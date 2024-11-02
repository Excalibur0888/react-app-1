import React from "react";
import classes from "../Form.module.css";
import ProfileInput from "./ProfileInput";

const ProfileForm = ({
  profile,
  handleInputChange,
  handlePhoneChange,
  buttonText,
  handleSaveChanges,
}) => (
  <div className={classes.logregbox}>
    <div className={classes.formbox}>
      <form onSubmit={handleSaveChanges}>
        <ProfileInput
          label="Имя:"
          type="text"
          value={profile?.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        <ProfileInput
          label="Фамилия:"
          type="text"
          value={profile?.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
        <ProfileInput
          label="Дата рождения:"
          type="date"
          value={profile?.dateOfBirth}
          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
          alwaysTransform
        />
        <ProfileInput
          label="Возраст:"
          type="number"
          value={profile?.age}
          onChange={(e) => handleInputChange("age", e.target.value)}
        />
        <ProfileInput
          label="Телефон:"
          type="tel"
          value={profile?.phone}
          onChange={handlePhoneChange}
					placeholder="+7 (___) ___-__-__"
          alwaysTransform
        />
        <ProfileInput
          label="Страна:"
          type="text"
          value={profile?.country}
          onChange={(e) => handleInputChange("country", e.target.value)}
        />
        <button type="submit" id="submit">
          {buttonText}
        </button>
      </form>
    </div>
  </div>
);

export default ProfileForm;
