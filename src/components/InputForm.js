import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputFocus, setShowDropdown } from "../redux/countryCodeSlice";
import CountryButton from "./CountryButton";
import DropDown from "./DropDown";

import "./InputForm.css";

const data = [
	{
		id: 1,
		countryCode: "US",
		number: "+1",
		src: "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png",
	},
	{
		id: 2,
		countryCode: "IN",
		number: "+91",
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png",
	},
	{
		id: 3,
		countryCode: "UK",
		number: "+44",
		src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png",
	},
	{
		id: 4,
		countryCode: "CA",
		number: "+1",
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png",
	},
	{
		id: 5,
		countryCode: "AU",
		number: "+61",
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png",
	},
	{
		id: 6,
		countryCode: "FRA",
		number: "+33",
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
	},
];

const InputForm = () => {
	const dispatch = useDispatch();
	const showDropDown = useSelector(
		(state) => state.countryCodeSlice.showDropdown
	);

	const selectedCountry = useSelector(
		(state) => state.countryCodeSlice.selectedCountry
	);

	const inputFocus = useSelector(
		(state) => state.countryCodeSlice.inputFocus
	);

	return (
		<div
			className="inputForm"
			onBlur={() => {
				dispatch(setInputFocus(false));
				dispatch(setShowDropdown(false));
			}}>
			<div className={`form ${inputFocus ? "focus" : ""}`}>
				<div className="form-heading">Phone Number</div>
				<div className="form-InputDiv">
					<CountryButton data={selectedCountry} />
					<input
						type="number"
						placeholder="10-digit Number"
						onChange={(e) => {
							if (e.target.value.length >= 10) {
								e.target.value = e.target.value.slice(0, 10);
								// dispatch(setInputFocus(false));
							} else {
								e.target.value = e.target.value.slice(
									0,
									e.target.value.length
								);
							}
						}}
						onFocus={() => {
							dispatch(setInputFocus(true));
							// dispatch(setShowDropdown(true));
						}}
						onBlur={() => {
							dispatch(setInputFocus(false));
							// dispatch(setShowDropdown(false));
						}}
					/>
				</div>
			</div>
			{showDropDown && <DropDown data={data} />}
		</div>
	);
};

export default InputForm;
