import React from "react";
import classes from "../Form.module.css";
import user from "../../../../img/user.png";
import Garage from "./Garage";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ email, fileURL, profile, handleFileChange, onGarageUpdate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={classes.description}>
      <h1>Профиль</h1>
      <div className={classes.formHeader}>
        <label
          className={classes.photo}
          style={{
            backgroundImage: `url(${fileURL || profile?.photoURL || user})`,
          }}
        >
          <input
            type="file"
            name="profilePhoto"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <div>
          <span>Ваш email:</span>
          <span>{email}</span>
        </div>
        <button
          className={classes.logout}
          onClick={() => {
            dispatch(removeUser());
            navigate("/");
          }}
        >
          Выйти
        </button>
      </div>
      <Garage vehicles={profile?.vehicles || []} onGarageUpdate={onGarageUpdate} />
    </div>
  );
};

export default ProfileHeader;
