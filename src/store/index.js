import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import formReducer from './slices/formSlice';
import loginReducer from './slices/loginSlice';
import registerReducer from './slices/registerSlice';

export const store = configureStore ({
	reducer: {
		user: userReducer,
		form: formReducer,
		login: loginReducer,
		register: registerReducer,
	}
});