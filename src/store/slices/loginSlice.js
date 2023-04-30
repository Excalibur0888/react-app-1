import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: '',
	password: '',
	rememberMe: false,
};

export const loginSlice = createSlice({
	name: "login",
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
	},
});

export const {
	setEmail,
	setPassword,
	setRememberMe,
} = loginSlice.actions;

export default loginSlice.reducer;
