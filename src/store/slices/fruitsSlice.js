import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	boxContent: [],
	valueCopy: [],
	fruitsImages: [],
};

export const fruitsSlice = createSlice({
	name: "fruits",
	initialState,
	reducers: {
		setBoxContent: (state, action) => {
			state.boxContent = action.payload;
		},
		setValueCopy: (state, action) => {
			state.valueCopy = action.payload;
		},
		setFruitsImages: (state, action) => {
			state.fruitsImages = action.payload;
		},
	},
});

export const {
	setBoxContent,
	setValueCopy,
	setFruitsImages,
} = fruitsSlice.actions;

export default fruitsSlice.reducer;
