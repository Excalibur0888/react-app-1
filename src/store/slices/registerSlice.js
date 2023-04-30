import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: '',
	password: '',
	rememberMe: false,
	confirmPassword: '',
};

export const registerSlice = createSlice({
	name: "register",
	initialState,
	reducers: {
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		setRememberMe: (state, action) => {
			state.rememberMe = action.payload;
		},
		setconfirmPassword: (state, action) => {
			state.confirmPassword = action.payload;
		}
	},
});

export const {
	setEmail,
	setPassword,
	setRememberMe,
	setconfirmPassword,
} = registerSlice.actions;

export default registerSlice.reducer;
