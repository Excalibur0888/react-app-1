import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import ProfileHeader from "./components/ProfileHeader";
import ProfileForm from "./components/ProfileForm";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../../hooks/use-auth";
import { useDispatch, useSelector } from "react-redux";
import {
  setProfile,
  setFile,
  setFileURL,
} from "../../../store/slices/formSlice";
import {
  getUserProfile,
  updateUserProfile,
  uploadFileAndGetURL,
} from "../../../firebase";

const Form = () => {
  const { profile, file, fileURL } = useSelector((state) => state.form);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonText, setButtonText] = useState("Сохранить изменения");
  const auth = getAuth();
  const { email } = useAuth();
  const uid = auth.currentUser ? auth.currentUser.uid : "";
  const dispatch = useDispatch();

  useEffect(() => {
    if (uid) {
      setIsLoading(true);
      getUserProfile(uid)
        .then((data) => dispatch(setProfile(data)))
        .finally(() => setIsLoading(false));
    }
  }, [email, uid, dispatch]);

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

  const handleInputChange = (field, value) => {
    dispatch(setProfile({ ...profile, [field]: value }));
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneLength = phoneNumber.length;
    if (phoneLength < 2) return `+${phoneNumber}`;
    if (phoneLength < 5) return `+7 (${phoneNumber.slice(1)}`;
    if (phoneLength < 8)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    if (phoneLength < 10)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
        4,
        7
      )}-${phoneNumber.slice(7)}`;
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    dispatch(setProfile({ ...profile, phone: formattedPhoneNumber }));
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
      <div className={isLoading ? classes.loading : ""}>
        <div></div>
      </div>
      <div className={classes.container}>
        <ProfileHeader
          email={email}
          fileURL={fileURL}
          profile={profile}
          handleFileChange={handleFileChange}
        />
        <ProfileForm
          profile={profile}
          handleInputChange={handleInputChange}
          handlePhoneChange={handlePhoneChange}
          buttonText={buttonText}
          handleSaveChanges={handleSaveChanges}
        />
      </div>
    </div>
  );
};

export default Form;
