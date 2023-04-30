import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	profile: null,
	file: null,
	fileURL: null
};

export const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.profile = action.payload;
		},
		setFile: (state, action) => {
			state.file = action.payload;
		},
		setFileURL: (state, action) => {
			state.fileURL = action.payload;
		},
	}
});

export const {
	setProfile,
	setFile,
	setFileURL
} = formSlice.actions;

export default formSlice.reducer;
