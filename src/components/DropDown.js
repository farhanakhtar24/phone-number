import React from "react";
import { useSelector } from "react-redux";
import CountryButton from "./CountryButton";
import "./DropDown.css";

const DropDown = ({ data }) => {
	const selectedCountry = useSelector(
		(state) => state.countryCodeSlice.selectedCountry
	);

	return (
		<div className="dropDown">
			{data.map((item) => {
				return (
					selectedCountry.id !== item.id && (
						<CountryButton key={item.id} data={item} />
					)
				);
			})}
		</div>
	);
};

export default DropDown;
