import React, { useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SlideContext } from "../Context/SlideContext";

const SlideView = () => {
	const {internSlide, setInternSlide, externSlide, setExternSlide, internTime, setInternTime, externTime, setExternTime} = useContext(SlideContext);
	const [blender, setBlender] = useState(false);
	return (
		<>
		<div className="SlideShow">
		<Carousel controls={false} indicators={false} pause={false}>
			{internSlide.map((item, idx) => {
				return (
					<Carousel.Item interval={internTime[idx]}>
						<iframe className="view" title="slide" srcdoc={internSlide[idx]} />
					</Carousel.Item>
				);
			})}
		</Carousel>
		</div>
		{/* {!blender <internSlide /> : <externSlide />} */}
		</>
	);
};

export default SlideView;
