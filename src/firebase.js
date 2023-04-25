import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDLIRIHGpmJQZ-wO2JQM9yyx70uH9Lo5io",
	authDomain: "react-app-5be9d.firebaseapp.com",
	projectId: "react-app-5be9d",
	storageBucket: "react-app-5be9d.appspot.com",
	messagingSenderId: "901920161133",
	appId: "1:901920161133:web:ac28921f6980de1029ae64",
	measurementId: "G-M79KHY6RBF"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export const uploadFileAndGetURL = async (file) => {
  const fileRef = storageRef(storage, file.name);
  const uploadTask = uploadBytesResumable(fileRef, file);
  const snapshot = await uploadTask;
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};

export const getUserProfile = async (userId) => {
	const userRef = doc(db, "users", userId);
	const docSnap = await getDoc(userRef);
	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		throw new Error("User not found");
	}
};

export const updateUserProfile = async (userId, newProfileData) => {
	const userRef = doc(db, "users", userId);
	const docSnap = await getDoc(userRef);

	if (docSnap.exists()) {
		await updateDoc(userRef, newProfileData);
	} else {
		await setDoc(userRef, newProfileData);
	}
};
