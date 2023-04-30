import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	boxContent: [],
	valueCopy: [],
	vegetablesImages: [],
};

export const vegetablesSlice = createSlice({
	name: "vegetables",
	initialState,
	reducers: {
		setBoxContent: (state, action) => {
			state.boxContent = action.payload;
		},
		setValueCopy: (state, action) => {
			state.valueCopy = action.payload;
		},
		setVegetablesImages: (state, action) => {
			state.vegetablesImages = action.payload;
		},
	},
});

export const {
	setBoxContent,
	setValueCopy,
	setVegetablesImages,
} = vegetablesSlice.actions;

export default vegetablesSlice.reducer;
