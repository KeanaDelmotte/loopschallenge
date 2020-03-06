import React from "react";
import "./loop1step5.css";

const Loop1Step5: React.FC = () => {
	return (
		<div className="background5">
			<div className="container5">
				<div className="container__destination">
					<div className="destination__from">
						<p className=" destination__abbrev from__abbrev">FRA</p>
						<p className="from__full">FRANFURT</p>
					</div>

					<hr className="destination__line" />
					<div className="destination__to">
						<p className=" destination__abbrev to__abbrev ">AMS</p>
						<p className="to__full">AMSTERDAM</p>
					</div>
				</div>

				<div className="container5__info">
					<div className="info__flight">
						<p className="flight__title info--title">FLIGHT</p>
						<p className="flight__number info--details">815</p>
					</div>
					<div className="info__gate">
						<p className="gate__title info--title">GATE</p>
						<p className="gate__number info--details">23G</p>
					</div>

					<div className="info__seat">
						<p className="seat__title info--title">SEAT</p>
						<p className="seat__number info--details">10F</p>
					</div>

					<div className="info__passenger">
						<p className="passenger__title info--title">PASSENGER</p>
						<p className="passenger__name info--details">Robert De Niro</p>
					</div>

					<div className="info__class">
						<p className="className__title info--title">CLASS</p>
						<p className="className__name info--details">Business</p>
					</div>

					<div className="info__depature">
						<p className="departure__title info--title">DEPARTURE</p>
						<p className="departure__time info--details">3:45am, Dec 15</p>
					</div>
					<img src="img/qr.svg" alt="qr code" className="info__qr" />
				</div>
			</div>
		</div>
	);
};

export default Loop1Step5;
