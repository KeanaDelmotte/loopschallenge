import React from "react";
import "./loop1step10.css";

const Loop1Step10: React.FC = () => {
	return (
		<div className="background10">
			<div className="container10">
				<div className="container10__header">
					<img src="img/logo.svg" alt="logo" className="header__logo" />
					<div className="header__nav">
						<button className="nav__item">About</button>
						<button className="nav__item">Offers</button>
						<button className="nav__item">Services</button>
						{/* <!-- <button className="nav__item nav__item--selected">
						How can we help you?
					</button> --> */}
						<input
							type="text"
							placeholder="How can we help you?"
							className="nav__item
					nav__item--selected nav__input"
						/>
					</div>
					<div className="ad header__ad">
						<h1 className="  ad__heading">Freedom calls.</h1>
						<hr className="ad__line" />
						<p className="ad__paragraph">
							Answer a call from your surfboard. Ask Siri to send a message.
							Stream your favourite songs on your run. And do it all while
							leaving your phone behind. Introducing Apple Watch Series 3 with
							cellular. Now you have the freedom to go with just your watch.
						</p>
						<button className="btn--pink ad__button">WATCH THE KEYNOTE</button>
					</div>
					<img
						src="img/watches.jpg"
						alt="watch"
						className="header10__background"
					/>
					<hr className="header__line" />
				</div>

				<div className="container__info">
					<div className="info__features">
						<div className="feature features__feature">
							<h2 className="feature__heading">KNOW YOUR RUNS. IN AND OUT</h2>
							<p className="feature__paragraph">
								Train smarter with more in-run stats. Want to compare a run to
								your last five? Just swipe left. Mark splits by selecting pause
								or, using gestures, like tapping the screen or double clicking
								the side button. And get a full post-run report, incluing
								evaluation.
							</p>
							<button className="feature__btn">
								<div className="button__dot"></div>
							</button>
						</div>

						<div className="feature features__feature">
							<h2 className="feature__heading">RUN IN GOOD SPIRITS</h2>
							<p className="feature__paragraph">
								A little support can go a long way.You can receive encouraging
								emoji from friends. And reminders triggered by your friend's
								shared activity, the current weather, or your own history give
								you every reason to run.
							</p>
							<button className="feature__btn">
								<div className="button__dot"></div>
							</button>
						</div>

						<div className=" feature features__feature">
							<h2 className="feature__heading">JUST DO IT. SUNDAY</h2>
							<p className="feature__paragraph">
								Run every Sunday and see how long you can keep your streak
								alive. Fuel your run with exclusive Nike+ Run Club playlists on
								Apple Music.
							</p>
							<button className="  feature__learnmore">LEARN MORE</button>
						</div>
					</div>
					<div className=" ad info__ad">
						<h2 className="ad__heading">
							Nike Sport Band. <br />
							Light. Flexible. <br />
							Breathable
						</h2>
						<hr className="ad__line" />
						<p className="ad__paragraph">
							Made from the same durable, lightweight fluorolastomer as the
							original Apple Watch Sport Band reduces weight and improves
							ventilation via row after row of compression-molded perforations.
						</p>
						<button className=" btn--pink ad__button">BUY NOW</button>
					</div>
					<img src="img/preview2.jpg" alt="nike watch" className="info__img" />
				</div>
				<div className="container__footer">
					<div className=" ad footer__ad">
						<h2 className="footer__ad__heading ad__heading">
							Take controll of your health.
						</h2>
						<hr className="footer__ad__line ad__line" />
						<p className="ad__paragraph footer__ad__paragraph">
							With built in GPS and altimeter, Apple Watch Nike+ has all the
							features to help you take your run to the next level. You can even
							pair your watch wirelessly with compatible gym equipment. And it's
							swimproof so you can take a post-run dip in the pool.
						</p>
						<button className=" footer__ad__btn btn--pink ad__button">
							EXPLORE FEATURES
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loop1Step10;
