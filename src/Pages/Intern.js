import React, { useState, useContext } from "react";
import SlideView from "../Components/SlideView";
import DigitalClock from "../Components/DigitalClock";
import omtanken from "../Images/omtanken.png";
import PresenceAbsence from "../Components/PresenceAbsence";
import { SlideContext } from "../Context/SlideContext";

export default function Intern() {
	const { setTV } = useContext(SlideContext);

	return (
		<div className="Intern">
			<div className="Intern-Header">
				<h2 className="Intern-Clock">
					<DigitalClock />
				</h2>
				<img
					src={omtanken}
					alt="Logo"
					className="Logo"
					onClick={() => setTV(false)}
				/>
			</div>
			<div className="Intern-Body">
				<div className="Intern-Närvaro">
					<PresenceAbsence />
				</div>
				<SlideView className="Intern-Slide" />
			</div>
			<div className="Intern-Footer">
				<h1>1</h1>
			</div>
		</div>
	);
}
