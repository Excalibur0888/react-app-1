import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import vegetablesReducer from "./slices/vegetablesSlice";
import fruitsReducer from "./slices/fruitsSlice";
import flowersReducer from './slices/flowersSlice';
import formReducer from './slices/formSlice';
import loginReducer from './slices/loginSlice'
import registerReducer from './slices/registerSlice'

export const store = configureStore ({
	reducer: {
		user: userReducer,
		vegetables: vegetablesReducer,
		fruits: fruitsReducer,
		flowers: flowersReducer,
		form: formReducer,
		login: loginReducer,
		register: registerReducer,
	}
});