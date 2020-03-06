import React from "react";
import "./loop1step6.css";

const Loop1Step6: React.FC = () => {
	return (
		<div className="background6">
			<div className="container6">
				<img src="img/side.jpg" alt="city" className="container__background" />

				<h1 className="container6__heading">Become a member</h1>
				<p className="container__description">
					Use social networks to join us instantly. <br />
					You wont spend any time confirming those boring emails.
				</p>

				<div className="container__signup">
					<button className="signup signup--google">
						<img
							src="img/googleplus.svg"
							alt="googleplus"
							className="signup__icon"
						/>
						<p className="signup__text">SIGN UP WITH GOOGLE+</p>
					</button>
					<button className="signup signup--facebook">
						<img
							src="img/facebook.svg"
							alt="facebook"
							className="signup__icon"
						/>
						<p className="signup__text">SIGN UP WITH FACEBOOK</p>
					</button>
					<button className="signup signup--twitter">
						<img src="img/twitter.svg" alt="twitter" className="signup__icon" />
						<p className="signup__text">SIGN UP WITH TWITTER</p>
					</button>
				</div>
				<hr className="container__line" />
				<div className="container__email-signup">
					<p className="email__text">
						You can still sign up with your email adress
					</p>
					<button className="email__btn">SIGN UP WITH EMAIL</button>
				</div>
			</div>
		</div>
	);
};

export default Loop1Step6;
