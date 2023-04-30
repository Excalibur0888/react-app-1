import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	boxContent: [],
	valueCopy: [],
	flowersImages: [],
};

export const flowersSlice = createSlice({
	name: "flowers",
	initialState,
	reducers: {
		setBoxContent: (state, action) => {
			state.boxContent = action.payload;
		},
		setValueCopy: (state, action) => {
			state.valueCopy = action.payload;
		},
		setFlowersImages: (state, action) => {
			state.flowersImages = action.payload;
		},
	},
});

export const {
	setBoxContent,
	setValueCopy,
	setFlowersImages,
} = flowersSlice.actions;

export default flowersSlice.reducer;
