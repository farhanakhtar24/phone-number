import { configureStore } from "@reduxjs/toolkit";
import countryCodeSlice from "./countryCodeSlice";

const store = configureStore({
	reducer: {
		countryCodeSlice: countryCodeSlice.reducer,
	},
});

export default store;
