import React from "react";
import "./loop1step7.css";

const Loop1Step7: React.FC = () => {
	return (
		<div className="background7">
			<div className="container7">
				<div className="container7__header">
					<h1 className="header__heading">
						Be a man: <br />
						<span className="heading__subheading">Respect women</span>
						<br />
						<hr className="heading7__line" />
					</h1>

					<div className="header__author">
						<img src="img/avatar.jpg" alt="avatar" className="author__img" />
						<p className="author__name">John Hanson</p>
					</div>
				</div>

				<div className="container__paragraph">
					<span className="paragraph__first-letter">T</span>he desire to be
					respected by someone of the opposite sex is something that runs deep
					within everyone, even though most people don't take the time to find
					someone who truly respects them. It seems like people are just looking
					for someone to show them the slightest amount of attention, settling
					for something much less than respect. I am convinced one of the best
					ways to help a relationship grow is by showing respect. <br />I have
					come to the conclusion everyone longs to be respected. What is
					respect? Respect is showing someone extra special attention, or high
					regard, based on a desire to show them how highly they are valued.
				</div>

				<div className="container__comment-section">
					<p className="comment-section__date">
						Sat 06 Aug 2017 - <span className="date__time">22:14</span>
					</p>
					<img src="img/comment.svg" alt="comment" className="comments__icon" />
					<p className="comments__amount">23</p>

					<img
						src="img/more.svg"
						className="comment-section__hamburger"
						alt="menu"
					/>
				</div>
			</div>
		</div>
	);
};

export default Loop1Step7;
