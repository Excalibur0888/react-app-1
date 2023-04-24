import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, orderByKey, query, equalTo, update } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDLIRIHGpmJQZ-wO2JQM9yyx70uH9Lo5io",
	authDomain: "react-app-5be9d.firebaseapp.com",
	databaseURL: "https://react-app-5be9d-default-rtdb.firebaseio.com",
	projectId: "react-app-5be9d",
	storageBucket: "react-app-5be9d.appspot.com",
	messagingSenderId: "901920161133",
	appId: "1:901920161133:web:ac28921f6980de1029ae64",
	measurementId: "G-M79KHY6RBF"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const getUserProfile = (userId) => {
	const usersRef = ref(database, "users");
	const userQuery = query(usersRef, orderByKey(), equalTo(userId));

	return new Promise((resolve, reject) => {
		onValue(userQuery, (snapshot) => {
			const userData = snapshot.val();
			if (userData) {
				resolve(userData);
			} else {
				reject("User not found");
			}
		});
	});
};
export const updateUserProfile = (userId, newProfileData) => {
	const userRef = ref(database, `users/${userId}`);
	return update(userRef, newProfileData);
};
