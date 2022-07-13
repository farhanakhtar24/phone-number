import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CountryButton.css";
import {
	setInputFocus,
	setSelectedCountry,
	setShowDropdown,
} from "../redux/countryCodeSlice";
import { IoMdArrowDropdown } from "react-icons/io";

const CountryButton = ({ data }) => {
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

	const handleClick = () => {
		dispatch(setSelectedCountry(data));
		dispatch(setShowDropdown(!showDropDown));
		dispatch(setInputFocus(!inputFocus));
	};
	return (
		<div className="btn-div" onClick={handleClick}>
			<img className="btn-img" alt="flag" src={data.src} />
			<button className="btn">{data.number}</button>
			{selectedCountry.id === data.id && <IoMdArrowDropdown />}
		</div>
	);
};

export default CountryButton;
