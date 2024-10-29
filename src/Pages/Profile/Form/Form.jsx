import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import user from "../../../img/user.png";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../../hooks/use-auth";
import { removeUser } from "../../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserProfile,
  updateUserProfile,
  uploadFileAndGetURL,
} from "../../../firebase";
import {
  setProfile,
  setFile,
  setFileURL,
} from "../../../store/slices/formSlice";
import { useSelector } from "react-redux";

const Form = () => {
  const { profile, file, fileURL } = useSelector((state) => state.form);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonText, setButtonText] = useState("Сохранить изменения");
  const loading_style = `${isLoading ? classes.loading : null}`;

  const auth = getAuth();
  const { email } = useAuth();
  const uid = auth.currentUser ? auth.currentUser.uid : "";
  const dispatch = useDispatch();
  const push = useNavigate();

  useEffect(() => {
    if (uid) {
      setIsLoading(true);
      getUserProfile(uid)
        .then((data) => {
          dispatch(setProfile(data));
        })
        .finally(() => setIsLoading(false));
    }
  }, [email]);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    dispatch(setFile(selectedFile));
    if (selectedFile) {
      const downloadURL = await uploadFileAndGetURL(selectedFile);
      dispatch(setFileURL(downloadURL));
    } else {
      dispatch(setFileURL(null));
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (profile) {
      let newProfileData = { ...profile };
      if (file) {
        const downloadURL = await uploadFileAndGetURL(file);
        dispatch(setFileURL(downloadURL));
        newProfileData.photoURL = downloadURL;
      }
      if (fileURL) {
        newProfileData.photoURL = fileURL;
      }
      updateUserProfile(uid, newProfileData)
        .then(() => setButtonText("Сохранено!"))
        .catch(() => setButtonText("Возникла ошибка, попробуйте позже"));
    } else {
      setButtonText("Изменений не обнаружено");
    }
  };

  return (
    <div className={classes.Form}>
      <div className={loading_style}>
        <div></div>
      </div>
      <div className={classes.container}>
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
              dispatch(removeUser(), push("/"));
            }}
          >
            Выйти
          </button>
        </div>
        <div className={classes.logregbox}>
          <div className={classes.formbox}>
            <form>
              <div className={classes.inputbox}>
                <label>Имя:</label>
                <input
                  type="text"
                  value={profile?.firstName || ""}
                  onChange={(e) =>
                    dispatch(
                      setProfile({ ...profile, firstName: e.target.value })
                    )
                  }
                  placeholder=" "
                />
              </div>
              <div className={classes.inputbox}>
                <label>Фамилия:</label>
                <input
                  type="text"
                  value={profile?.lastName || ""}
                  onChange={(e) =>
                    dispatch(
                      setProfile({ ...profile, lastName: e.target.value })
                    )
                  }
                  placeholder=" "
                />
                <div className={classes.inputbox}></div>
              </div>
              <div className={classes.inputbox}>
                <label>Дата рождения:</label>
                <input
                  type="date"
                  value={profile?.dateOfBirth || ""}
                  onChange={(e) =>
                    dispatch(
                      setProfile({ ...profile, dateOfBirth: e.target.value })
                    )
                  }
                />
              </div>
              <div className={classes.inputbox}>
                <label>Возраст:</label>
                <input
                  type="number"
                  value={profile?.age || ""}
                  onChange={(e) =>
                    dispatch(setProfile({ ...profile, age: e.target.value }))
                  }
                  placeholder=" "
                />
              </div>
              <div className={classes.inputbox}>
                <label>Пол:</label>
                <select
                  value={profile?.gender || ""}
                  onChangeй={(e) =>
                    dispatch(setProfile({ ...profile, gender: e.target.value }))
                  }
                >
                  <option value="">Выбрать пол</option>
                  <option value="male">Мужчина</option>
                  <option value="female">Женщина</option>
                </select>
              </div>
              <div className={classes.inputbox}>
                <label>Страна:</label>
                <input
                  type="text"
                  value={profile?.country || ""}
                  onChange={(e) =>
                    dispatch(
                      setProfile({ ...profile, country: e.target.value })
                    )
                  }
                  placeholder=" "
                />
              </div>
              <button id="submit" onClick={handleSaveChanges}>
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
