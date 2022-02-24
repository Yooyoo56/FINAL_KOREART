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
											<Link to="/artists">Artists</Link>
											<div className="genre-tracks">
												<p>4 creative profiles to discover </p>
											</div>
										</div>
									</div>
								</div>

								<div className="home-app-content-section-mod-workarts">
									<div className="genre-info">
										<div className="genre-title">
											<Link to="/workarts">Workarts</Link>
											<div className="genre-tracks">
												<p>10 outstanding pieces </p>
											</div>
										</div>
									</div>
								</div>

								<div className="home-app-content-section-mod-gallery">
									<div className="genre-info">
										<div className="genre-title">
											<Link to="/gallery">The Art Room</Link>
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

/*
<div className="first-homepage-container">
					<h1>
						<Link to="/artists">All artists</Link>
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi
						ipsum, varius a felis vitae, rutrum egestas augue.{" "}
					</p>
				</div>
				<div className="second-homepage-container">
					<h1>
						<Link to="/workarts">All Workarts</Link>
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi
						ipsum, varius a felis vitae, rutrum egestas augue.{" "}
					</p>
				</div>
				<div className="third-homepage-container">
					<h1>
						<Link to="/gallery">Our gallery</Link>
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi
						ipsum, varius a felis vitae, rutrum egestas augue.{" "}
					</p>
				</div>
				<div className="cta">
					<Link className="btn" to="/signup">
						Sign up
					</Link>
					<Link className="btn" to="/login">
						Log in
					</Link>
				</div>
*/

/*

import React from 'react';

import {Link, Redirect} from 'react-router-dom';

import Popin from '../Popin.js';

export default (props) => {
  return (
    <>
      {props.user._id ? (
        <Redirect to="/profile" />
      ) : (
        <Popin one={(
          <>
            <h1>IronProfile</h1>
            <p>Today we will create an app with authorization, adding some cool styles !</p>

            <div className="cta">
              <Link className="btn" to="/signup">Sign up</Link>
              <Link className="btn" to="/login">Log in</Link>
            </div>
          </>
        )} />
      )}
    </>
  );
}



*/
