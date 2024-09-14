import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	boxContent: [],
	valueCopy: [],
	ServicesImages: [],
};

export const ServicesSlice = createSlice({
	name: "Services",
	initialState,
	reducers: {
		setBoxContent: (state, action) => {
			state.boxContent = action.payload;
		},
		setValueCopy: (state, action) => {
			state.valueCopy = action.payload;
		},
		setServicesImages: (state, action) => {
			state.ServicesImages = action.payload;
		},
	},
});

export const {
	setBoxContent,
	setValueCopy,
	setServicesImages,
} = ServicesSlice.actions;

export default ServicesSlice.reducer;
