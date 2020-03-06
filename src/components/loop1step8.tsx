import React from "react";
import "./loop1step8.css";

const Loop1Step8: React.FC = () => {
	return (
		<div className="background8">
			<div className="container8">
				<img
					src="img/background8.jpg"
					alt="spain"
					className="container8__background"
				/>
				<button className="container__backbtn">
					<img src="img/arrow-back.svg" alt="back" className="backbtn__icon" />
					{/* <svg className="backbtn__icon
						fill="#000000"
						height="24"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
						/></svg> */}
					BACK
				</button>

				<div className="container__infopage">
					<div className="infopage__nav">
						<button className=" nav__btn nav__neth">NETHERLANDS</button>
						<button className=" nav__btn nav__spain nav--selected">
							SPAIN
						</button>
						<button className=" nav__btn nav__france">FRANCE</button>
					</div>

					<h1 className="infopage__heading">
						Visiting the <br /> pastelle city <hr className="heading__line" />
					</h1>

					<h2 className="infopage__author">
						By <span className="author__name">Jerry Henderson</span>, in Tourism
					</h2>
					<div className="infopage__preview">
						<img src="img/preview.jpg" alt="preview" className="preview__img" />
						<div className="preview__icon">
							<img src="img/play.svg" alt="play" className="icon__img" />
						</div>
					</div>
					<p className="infopage__description">
						As you drive into the town from Alicante airport you will pass
						between two salt lakes - one is blue/green and the other is an
						impressive pink colour.
					</p>
					<button className="infopage__photobtn">
						VIEW ALL PHOTOS{" "}
						<svg
							className="photobtn__icon"
							fill="#000000"
							height="24"
							viewBox="0 0 24 24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Loop1Step8;
