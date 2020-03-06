import React from "react";
import "./loop1step1.css";

const Loop1Step1: React.FC = () => {
	return (
		<div className="background1">
			<div className="container1">
				<ul className="devices">
					<li className="devices-item">
						<img
							src="img/device.svg"
							alt="mobile"
							className="devices-item--img"
						/>
						<h2 className="devices-item--heading">MOBILE</h2>
						<p className="devices-item--description">
							Get notifications about new releases on our mobile app
						</p>
						<p className="devices-item--price">
							<span className="devices-item--price_currency">$</span>
							<span className="devices-item--price_number">10 </span>
							<span className="devices-item--price_month">/ month</span>
						</p>
					</li>

					<li className="devices-item">
						<img
							src="img/laptop.svg"
							alt="desktop"
							className="devices-item--img"
						/>
						<h2 className="devices-item--heading">DESKTOP</h2>
						<p className="devices-item--description">
							Enjoy new episodes on your laptop in browser with our web service
							which supports all the platforms.
						</p>
						<p className="devices-item--price">
							<span className="devices-item--price_currency">$</span>
							<span className="devices-item--price_number">15 </span>
							<span className="devices-item--price_month">/ month</span>
						</p>
					</li>

					<li className="devices-item">
						<img src="img/monitor.svg" alt="tv" className="devices-item--img" />
						<h2 className="devices-item--heading">TV</h2>
						<p className="devices-item--description">
							Watch your favourite series at home on large screen with our tv
							application.
						</p>
						<p className="devices-item--price">
							<span className="devices-item--price_currency">$</span>
							<span className="devices-item--price_number">20 </span>
							<span className="devices-item--price_month">/ month</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Loop1Step1;
