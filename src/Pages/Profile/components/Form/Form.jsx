import React, { useEffect, useState } from "react";
import classes from './Form.module.css';
import user from '../../../../img/user.png'
import { getAuth } from "firebase/auth";
import { useAuth } from "../../../../hooks/use-auth";
import { removeUser } from '../../../../store/slices/userSlice'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getUserProfile, updateUserProfile, uploadFileAndGetURL } from "../../../../firebase";

const Form = () => {
	const [profile, setProfile] = useState(null);
	const [file, setFile] = useState(null);
	const [fileURL, setFileURL] = useState(null);

	const auth = getAuth();
	const {email} = useAuth();
	const uid = auth.currentUser ? auth.currentUser.uid : '';
	const dispatch = useDispatch();
	const push = useNavigate();

	useEffect (() => {
		if (uid) {
			getUserProfile(uid).then((data) => {
				setProfile(data);
			});
		} 
	}, []);

	const handleFileChange = async (e) => {
		const selectedFile = e.target.files[0];
		setFile(selectedFile);
		if (selectedFile) {
			const downloadURL = await uploadFileAndGetURL(selectedFile);
			setFileURL(downloadURL);
		} else {
			setFileURL(null);
		}
	};

	const handleSaveChanges = async (e) => {
		e.preventDefault();
		if (profile) {
			let newProfileData = {...profile};
			if (file) {
				const downloadURL = await uploadFileAndGetURL(file);
				setFileURL(downloadURL);
				newProfileData.photoURL = downloadURL;
			}
			if (fileURL) {
				newProfileData.photoURL = fileURL;
			}
			updateUserProfile(uid, newProfileData)
				.then(() => alert("Profile updated successfully!"))
				.catch((error) => console.log(error));
		}
		else {
			alert('Nothing changed')
		}
	};
	
	return (
		<div className={classes.Form}>
			<div className={classes.container}>
			<div className={classes.description}>
				<label className={classes.photo} style={{backgroundImage: `url(${fileURL || profile?.photoURL || user})`}}>
				<input type="file" name="profilePhoto" onChange={handleFileChange}/>
				</label>
				<h3>Your email:</h3>
				<span>{email}</span>
				<button className={classes.logout} onClick={() => {dispatch(removeUser(), push('/'))}}>Log out</button>
			</div>
				<div className={classes.logregbox}>
				<div className={classes.formbox}>
				<form>
				<div className={classes.inputbox}>
				<label>First name</label>
				<input type="text" value={profile?.firstName || ''} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} placeholder=" "/>
				</div>
				<div className={classes.inputbox}>
				<label>Last name</label>
				<input type="text" value={profile?.lastName || ''} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} placeholder=" "/>
				<div className={classes.inputbox}></div>
				</div>
				<div className={classes.inputbox}>
				<label>Date of birth</label>
				<input type="date" value={profile?.dateOfBirth || ''} onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })} />
				</div>
				<div className={classes.inputbox}>
				<label>Age</label>
				<input type="number" value={profile?.age || ''} onChange={(e) => setProfile({ ...profile, age: e.target.value })} placeholder=" "/>
				</div>
				<div className={classes.inputbox}>
				<label>Gender:</label>
				<select value={profile?.gender || ''} onChange={(e) => setProfile({ ...profile, gender: e.target.value })}>
				<option value="">Select Gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
				</div>
				<div className={classes.inputbox}>
				<label>Country</label>
				<input type="text" value={profile?.country || ''} onChange={(e) => setProfile({ ...profile, country: e.target.value })} placeholder=" "/>
				</div>
				<button onClick={handleSaveChanges}>Save Changes</button>
			</form>
			</div>
			</div>
			</div>
		</div>
	);
}

export default Form;