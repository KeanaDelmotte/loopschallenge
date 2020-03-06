import React from "react";
import "./loop1step9.css";

const Loop1Step9: React.FC = () => {
	return (
		<div className="background9">
			<div className="container9">
				<div className="container__wallet">
					<h2 className="wallet__heading">
						My Wallets
						<svg
							className="heading__addcard"
							fill="#000000"
							height="24"
							viewBox="0 0 24 24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
							<path d="M0 0h24v24H0z" fill="none" />
						</svg>
					</h2>

					<div className="container__cards">
						<div className="cards__card cards__visa">
							<img
								src="img/visa.svg"
								alt="visa"
								className=" card__img visa__img"
							/>
							<p className=" card__cardnr visa__cardnr">**** **** **** 2562</p>
							<p className="card__expdate visa__expdate">Valid thru: 12/17</p>
						</div>

						<div className=" cards__card cards__mastercard card--selected">
							<img
								src="img/mastercard.svg"
								alt="mastercard"
								className=" card__img mastercard__img"
							/>
							<p className=" card__cardnr mastercard__cardnr">
								**** **** **** 2101
							</p>
							<p className="card__expdate mastercard__expdate">
								Valid thru: 07/19
							</p>
						</div>

						<div className=" cards__card cards__maestro">
							<img
								src="img/maestro.svg"
								alt="maestro"
								className="card__img maestro__img"
							/>
							<p className=" card__cardnr maestro__cardnr">
								**** **** **** 8335
							</p>
							<p className="card__expdate maestro__expdate">
								Valid thru: 09/17
							</p>
						</div>
					</div>
				</div>

				<div className="container__balance">
					<h2 className="balance__heading">
						Current Balance
						<span className="heading__total">
							$729.<span className="total__cents">00</span>
						</span>
					</h2>
					<hr className="balance__divider" />
					<div className="balance__transaction ">
						<div className="transaction__type">
							<img src="img/minus.svg" alt="minus" className="type__img" />
						</div>
						<p className="transaction__details">
							Apple iPhone 7, 128GB
							<span className="details__subdet">
								Electonics #32343424 - 12 July 2015
							</span>
						</p>
						<p className="transaction__price transaction__expense">
							$650.<span className="price__cents">00</span>
						</p>
					</div>

					<div className="balance__transaction  ">
						<div className="transaction__type">
							<img src="img/plus.svg" alt="plus" className="type__img" />
						</div>

						<p className="transaction__details">
							Funds Added
							<span className="details__subdet">
								Payment #5435 - 11 July 2015
							</span>
						</p>
						<p className="transaction__price transaction__income">
							$900.<span className="price__cents">00</span>
						</p>
					</div>

					<div className="balance__transaction ">
						<div className="transaction__type">
							<img src="img/minus.svg" alt="minus" className="type__img" />
						</div>

						<p className="transaction__details">
							Energy Bill
							<span className="details__subdet">
								Other #745327423 - 11 July 2015
							</span>
						</p>
						<p className="transaction__price  transaction__expense">
							$84.<span className="price__cents">90</span>
						</p>
					</div>

					<div className="balance__transaction  ">
						<div className="transaction__type">
							<img src="img/minus.svg" alt="minus" className="type__img" />
						</div>

						<p className="transaction__details">
							The Eye Cinema Ticket
							<span className="details__subdet">
								Entertainment #32343424 - 10 July 2015
							</span>
						</p>
						<p className="transaction__price transaction__expense">
							$40.<span className="price__cents">00</span>
						</p>
					</div>

					<div className="balance__transaction  ">
						<div className="transaction__type">
							<img src="img/minus.svg" alt="minus" className="type__img" />
						</div>

						<p className="transaction__details">
							McFood Restaurant
							<span className="details__subdet">
								{" "}
								Cafes #32488 - 10 July 2015
							</span>
						</p>
						<p className="transaction__price transaction__expense">
							$10.<span className="price__cents">50</span>
						</p>
					</div>

					<div className="balance__transaction  ">
						<div className="transaction__type">
							<img src="img/minus.svg" alt="minus" className="type__img" />
						</div>

						<p className="transaction__details">
							Gas Station
							<span className="details__subdet">
								{" "}
								Other #2138453 - 10 July 2015
							</span>
						</p>
						<p className="transaction__price transaction__expense">
							$30.<span className="price__cents">00</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Loop1Step9;
