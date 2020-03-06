import React from "react";
import "./loop2step1.css";

const Loop2Step1: React.FC = () => {
	return (
		<div className="background21">
			<div className="page">
				<div className="page__headings">
					<h2 className="headings__heading heading--selected">SYNTHETIC</h2>
					<h2 className="headings__heading">WOOL</h2>
					<h2 className="headings__heading">DENIM</h2>
					<h2 className="headings__heading">SILK</h2>
					<h2 className="headings__heading">LINEN</h2>
				</div>
				<h3 className="page__warning">
					Load should be under 8 pounds. It is recommended using natural
					detergent to prevent damage to the cloth and to improve the washing
					results.
				</h3>
				<button className="page__prevbtn">
					<img src="/img/SVG/caret-left.svg" alt="" className="btn__icon" />
				</button>
				<div className="page__washing">
					<div className="washing__timer washing__display">
						<h2 className="timer__heading washing__heading ">Timer</h2>
						<p className="timer__time washing__customizable">45 min</p>
					</div>
					<div className="washing__temp washing__display">
						<h2 className="washing__heading temp__heading">Temperature</h2>
						<p className="temp__type washing__customizable">Cold</p>
					</div>
					<div className="washing__amount washing__display">
						<h2 className=" washing__heading amount__heading">Load</h2>
						<p className="amount__size washing__customizable">Medium</p>
					</div>
					<button className="washing__startbtn">START</button>
				</div>
				<button className="page__nextbtn">
					<img src="/img/SVG/caret-right.svg" alt="" className="btn__icon" />
				</button>
			</div>
		</div>
	);
};

export default Loop2Step1;
