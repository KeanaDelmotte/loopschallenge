import React from "react";
// import "./App.scss";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { challenges } from "./challenges.json";
import Loop1Step1 from "./components/loop1step1";
import Loop1Step2 from "./components/loop1step2";
import Loop1Step3 from "./components/loop1step3";
import Loop1Step4 from "./components/loop1step4";
import Loop1Step5 from "./components/loop1step5";
import Loop1Step6 from "./components/loop1step6";
import Loop1Step7 from "./components/loop1step7";
import Loop1Step8 from "./components/loop1step8";
import Loop1Step9 from "./components/loop1step9";
import Loop1Step10 from "./components/loop1step10";
import Loop2Step1 from "./components/loop2step1";
import "./App.scss";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<div className="App-container">
						<h2 className="App-heading">FrontLoop designs</h2>
						<p className="App-description">
							Frontloops is a series of design challenges, which are sent to
							you, along with all the assests needed to create them, and you are
							challenged to recreate the design in HTML/CSS. Below are my
							solutions to these challenges.
						</p>
						<ul className="App-designs">
							{challenges.map(challenge => (
								<li className="designs__item">
									<Link
										to={`loop${challenge.loop}step${challenge.step}`}
										className="item__link"
									>
										<h2 className="item__heading">{`Loop ${challenge.loop} - Step ${challenge.step}`}</h2>
										<img
											src={`./img/Loop ${challenge.loop} - Step ${challenge.step}.png`}
											alt="design"
											className="link__img"
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</Route>
				<Route path="/loop1step1">
					<Loop1Step1 />
				</Route>
				<Route path="/loop1step2">
					<Loop1Step2 />
				</Route>
				<Route path="/loop1step3">
					<Loop1Step3 />
				</Route>
				<Route path="/loop1step4">
					<Loop1Step4 />
				</Route>
				<Route path="/loop1step5">
					<Loop1Step5 />
				</Route>
				<Route path="/loop1step6">
					<Loop1Step6 />
				</Route>
				<Route path="/loop1step7">
					<Loop1Step7 />
				</Route>
				<Route path="/loop1step8">
					<Loop1Step8 />
				</Route>
				<Route path="/loop1step9">
					<Loop1Step9 />
				</Route>
				<Route path="/loop1step10">
					<Loop1Step10 />
				</Route>
				<Route path="/loop2step1">
					<Loop2Step1 />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
