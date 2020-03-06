import React from "react";
import "./loop1step4.css";

const Loop1Step4: React.FC = () => {
	return (
		<div className="background4">
			<div className="container4">
				<div className="container4__header">
					<div className="header__dot"></div>
					<p className="header__name">MARK ZUCKERBERG</p>
					<div className="header__close">
						{/* <!-- <img src="img/close.svg" alt="close" className="header__close__img" /> --> */}
						<svg
							fill="#FFFFFF"
							height="24"
							viewBox="0 0 24 24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							className="header__close__img"
						>
							<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
							<path d="M0 0h24v24H0z" fill="none" />
						</svg>
					</div>
				</div>
				<div className="container__date">
					<hr className="date__line" />
					<p className="date__name">TODAY</p>
					<hr className="date__line" />
				</div>

				<div className="container__msgs">
					<div className="msgs__msg msgs__msg--send">
						<p className="msgs__msg__time msgs__msg__time--send">10:53</p>
						<div className="msgs__msg__chatbubble  chatbubble--send">
							<p className="msgs__msg__chatbubble__text ">
								Hi Mark! I made a new design for Messenger App.
							</p>
						</div>
					</div>

					<div className="msgs__msg msgs__msg--receive">
						<p className="msgs__msg__time msgs__msg__time--receive ">10:57</p>
						<div className="msgs__msg__chatbubble chatbubble--receive">
							<p className="msgs__msg__chatbubble__text ">
								Yo! Send it to my assistant and we'll review it during the year.
							</p>
						</div>
					</div>

					<div className="msgs__msg msgs__msg--send">
						<p className="msgs__msg__time msgs__msg__time--send ">11:03</p>
						<div className="msgs__msg__chatbubble  chatbubble--send">
							<p className="msgs__msg__chatbubble__text ">But Mark...</p>
						</div>
					</div>

					<div className="msgs__msg msgs__msg--receive msgs__msg--info">
						<p className="msgs__msg__chatbubble__text ">
							You were blocked by the user.
						</p>
					</div>
				</div>
				<div className="container__input-box">
					<hr className="input-box__line" />
					<input
						type="text"
						className="input-box__input"
						placeholder="Enter your message"
					/>
					<button className="input-box__sendbtn">SEND</button>
				</div>
			</div>
		</div>
	);
};

export default Loop1Step4;
