import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	boxContent: [],
	valueCopy: [],
	treesImages: [],
};

export const treesSlice = createSlice({
	name: "trees",
	initialState,
	reducers: {
		setBoxContent: (state, action) => {
			state.boxContent = action.payload;
		},
		setValueCopy: (state, action) => {
			state.valueCopy = action.payload;
		},
		settreesImages: (state, action) => {
			state.treesImages = action.payload;
		},
	},
});

export const {
	setBoxContent,
	setValueCopy,
	settreesImages,
} = treesSlice.actions;

export default treesSlice.reducer;
