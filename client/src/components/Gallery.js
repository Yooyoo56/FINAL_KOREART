import React from "react";
import { Carousel } from "react-bootstrap";
import Img1 from "./carousel/carousel1.jpeg";
import Img2 from "./carousel/carousel2.jpg";
import Img3 from "./carousel/carousel3.jpeg";
import "./Gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Gallery extends React.Component {
	render() {
		return (
			<>
				<div className="play-carousel">
					<Carousel>
						<Carousel.Item interval={1000}>
							<img className="d-block" src={Img1} alt="KoreArt 1" />
							<Carousel.Caption>
								<h3>KoreArt, an Art Room</h3>
								<p>
									Freshly founded in 2022, Kore'Art is a young agency aiming at
									promoting bold and creative artists of the rising Korean
									contemporary scene.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img className="d-block" src={Img2} alt="KoreArt2" />
							<Carousel.Caption>
								<h3>KoreArt, a meeting place</h3>
								<p>
									Our agency is thinked as a meeting and sharing place where you
									can discover workarts, held an event and enjoy a coffee at the
									same time
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img className="d-block" src={Img3} alt="Koreart3" />
							<Carousel.Caption>
								<h3>KoreArt, a co-working space</h3>
								<p>
									We are opened from Monday to Saturday, 9:00 am to 8:00 pm. Get
									inspired .. a dedicated space is available to work in our Art
									Room
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</>
		);
	}
}
export default Gallery;
