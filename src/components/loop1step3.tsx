import React from "react";
import "./loop1step3.css";

const Loop1Step3: React.FC = () => {
	return (
		<div className="background3">
			<div className="container3">
				<h1 className="container-heading3">SimpleWheels</h1>
				<div className="container-profile">
					<img
						src="img/account.svg"
						alt="profile"
						className="container-profile--img"
					/>
				</div>
				<p className="container-notification">
					Thanks for your order #2357654, your package will be on it's way
					shortly.
				</p>
				<ul className="container-orders">
					<li className="container-orders--item container-orders--item1">
						<p className="container-orders--item_name">
							Chapelli Vintage Single Speed
						</p>
						<p className="container-orders--item_price">$317</p>
					</li>
					<li className="container-orders--item container-orders--item2">
						<p className="container-orders--item_name">
							Castelli Arenberg Gel Gloves
						</p>
						<p className="container-orders--item_price">$39</p>
					</li>
					<li className="container-orders--total ">
						<p className="container-orders--total_name">TOTAL</p>
						<p className="container-orders--total_price">$356</p>
					</li>
				</ul>
				<img src="img/bicycle.png" alt="bicycle" className="container-img" />
			</div>
		</div>
	);
};

export default Loop1Step3;
