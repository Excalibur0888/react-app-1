import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	boxContent: [],
	valueCopy: [],
	GalleryImages: [],
};

export const GallerySlice = createSlice({
	name: "Gallery",
	initialState,
	reducers: {
		setBoxContent: (state, action) => {
			state.boxContent = action.payload;
		},
		setValueCopy: (state, action) => {
			state.valueCopy = action.payload;
		},
		setGalleryImages: (state, action) => {
			state.GalleryImages = action.payload;
		},
	},
});

export const {
	setBoxContent,
	setValueCopy,
	setGalleryImages,
} = GallerySlice.actions;

export default GallerySlice.reducer;
