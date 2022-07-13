import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showDropdown: false,
	selectedCountry: {
		id: 1,
		countryCode: "US",
		number: "+1",
		src: "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png",
	},
};

const countryCodeSlice = createSlice({
	name: "countryCodeSlice",
	initialState,
	reducers: {
		setShowDropdown: (state, action) => {
			state.showDropdown = action.payload;
		},
		setSelectedCountry: (state, action) => {
			state.selectedCountry = action.payload;
		},
	},
});

export const { setShowDropdown, setSelectedCountry } = countryCodeSlice.actions;
export default countryCodeSlice;
