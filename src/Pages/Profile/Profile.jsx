import React, { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "../../firebase";
import './Profile.css';
import { getAuth } from "firebase/auth";
import { useAuth } from "../../hooks/use-auth";

const Profile = () => {
	const [profile, setProfile] = useState(null);
	const auth = getAuth();
	const {email} = useAuth();
	const uid = auth.currentUser ? auth.currentUser.uid : '';

	useEffect (() => {
		if (uid) {
			getUserProfile(uid).then((data) => {
				const userId = Object.keys(data)[0];
				const userProfile = data[userId];
				setProfile(userProfile);
			});
		} 
}, []);

	const handleSaveChanges = (e) => {
		e.preventDefault()
		if (profile) {
		updateUserProfile(uid, profile)
			.then(alert("Profile updated successfully!")
			)
			.catch((error) => alert("Error updating profile:", error));
		}
		else {
			alert('Nothing changed')
		}
	};
	

	return (
		<div className="Profile">
			<label>First name</label>
				<input type="text" value={profile?.firstName || ''} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
			<label>Last name</label>
				<input type="text" value={profile?.lastName || ''} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
			<label>Date of birth</label>
				<input type="date" value={profile?.dateOfBirth || ''} onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })} />
			<label>Age</label>
				<input type="text" value={profile?.age || ''} onChange={(e) => setProfile({ ...profile, age: e.target.value })} />
			<label>Gender:</label>
				<select value={profile?.gender || ''} onChange={(e) => setProfile({ ...profile, gender: e.target.value })}>
					<option value="">Select Gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			<label>Country</label>
				<input type="text" value={profile?.country || ''} onChange={(e) => setProfile({ ...profile, country: e.target.value })} />
			<button onClick={handleSaveChanges}>Save Changes</button>
		</div>
	);
};

export default Profile;
