import React, { useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SlideContext } from "../Context/SlideContext";

const SlideView = () => {
	const { internSlide, externSlide, internTime, externTime, tv } =
		useContext(SlideContext);

	function Intern() {
		return (
			<div className="SlideShow">
				<Carousel controls={false} indicators={false} pause={false}>
					{internSlide.map((item, idx) => {
						return (
							<Carousel.Item interval={internTime[idx]}>
								<iframe
									className="view"
									title="slide"
									srcdoc={internSlide[idx]}
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		);
	}

	function Extern() {
		return (
			<div className="SlideShow">
				<Carousel controls={false} indicators={false} pause={false}>
					{externSlide.map((item, idx) => {
						return (
							<Carousel.Item interval={externTime[idx]}>
								<iframe
									className="view"
									title="slide"
									srcdoc={externSlide[idx]}
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		);
	}
	return <>{!tv ? <Extern /> : <Intern />}</>;
};

export default SlideView;
