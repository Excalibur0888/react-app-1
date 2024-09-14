import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	boxContent: [],
	valueCopy: [],
	ReviewsImages: [],
};

export const ReviewsSlice = createSlice({
	name: "Reviews",
	initialState,
	reducers: {
		setBoxContent: (state, action) => {
			state.boxContent = action.payload;
		},
		setValueCopy: (state, action) => {
			state.valueCopy = action.payload;
		},
		setReviewsImages: (state, action) => {
			state.ReviewsImages = action.payload;
		},
	},
});

export const {
	setBoxContent,
	setValueCopy,
	setReviewsImages,
} = ReviewsSlice.actions;

export default ReviewsSlice.reducer;
