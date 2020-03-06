import React from "react";
import "./loop1step2.css";

const Loop1Step2: React.FC = () => {
	return (
		<div className="background2">
			<div className="container2">
				<div className="container-dots">
					<span className="span-dark"></span>
					<span className="span-light"></span>
					<span className="span-light"></span>
				</div>
				<h1 className="container2-heading">PAYMENT METHOD</h1>
				<ul className="cards2">
					<hr className="cards2-item--line" />

					<li className="cards2-item">
						<img src="img/visa.svg" alt="visa" className="cards2-item--img" />

						<p className="cards2-item--name">VISA</p>
					</li>
					<hr className="cards2-item--line" />

					<li className="cards2-item ">
						<img
							src="img/mastercard.svg"
							alt="mastercard"
							className="cards2-item--img"
						/>
						<p className="cards2-item--name cards2-item--name--selected cards-selected">
							MASTERCARD
						</p>
						<div className="cards2-item--selected">
							<img
								src="img/check.svg"
								alt="selected"
								className="cards2-item--selected_img"
							/>
						</div>
					</li>
					<hr className="cards2-item--line" />

					<li className="cards2-item">
						<img
							src="img/maestro.svg"
							alt="maestro"
							className="cards2-item--img"
						/>

						<p className="cards2-item--name">MAESTRO</p>
					</li>
				</ul>

				<button className="container-btn">
					<span className="container-btn--text"> NEXT STEP</span>
					<span className="container-btn--img">
						<img
							src="img/arrow.svg"
							alt="arrow"
							className="container-btn--img"
						/>
					</span>
				</button>
			</div>
		</div>
	);
};

export default Loop1Step2;
