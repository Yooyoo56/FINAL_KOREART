import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
	render() {
		return (
			<>
				<div className="phone-screen">
					<div className="home-app">
						<div className="home-app-header">
							<div className="home-app-content">
								<div className="home-app-content-section-mod-artists">
									<div className="genre-info">
										<div className="genre-title">
											<Link to="/artists" className="title-link">
												Artists
											</Link>
											<div className="genre-tracks">
												{/*	<p>4 creative profiles to discover </p> */}
											</div>
										</div>
									</div>
								</div>

								<div className="home-app-content-section-mod-workarts">
									<div className="genre-info">
										<div className="genre-title">
											<Link to="/workarts" className="title-link">
												Workarts
											</Link>
											<div className="genre-tracks">
												{/*	<p>10 outstanding pieces </p> */}
											</div>
										</div>
									</div>
								</div>

								<div className="home-app-content-section-mod-gallery">
									<div className="genre-info">
										<div className="genre-title">
											<Link to="/gallery" className="title-link">
												The Art Room
											</Link>
											<div className="genre-tracks">
												<p>Discover our gallery</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Home;
