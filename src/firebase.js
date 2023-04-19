import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);
