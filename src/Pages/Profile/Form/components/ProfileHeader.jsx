import React from "react";
import classes from "../Form.module.css";
import user from "../../../../img/user.png";
import Garage from "./Garage";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ email, fileURL, profile, handleFileChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={classes.description}>
      <h1>Профиль</h1>
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
      <h3>Ваш email:</h3>
      <span>{email}</span>
      <button
        className={classes.logout}
        onClick={() => {
          dispatch(removeUser());
          navigate("/");
        }}
      >
        Выйти
      </button>
      <Garage />
    </div>
  );
};

export default ProfileHeader;
