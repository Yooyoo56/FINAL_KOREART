//components/navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//import the autService! (to link backend-frontend)
import authService from "../components/auth-service.js";

class Navbar extends React.Component {
	state = {
		user: {}, // {}
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.user !== prevProps.user) {
			console.log("the user state has changed");
		}
	}

	updateUser = (data) => {
		this.setState({ user: data });
	};

	render() {
		console.log("the user is======>", this.props.user);

		// if the user is not logged in
		if (!this.props.user) {
			return (
				<div>
					<nav className="nav-style">
						<div className="nav">
							<div className="nav-title">
								<h1>
									{" "}
									<a className="homeTitle" href="/">
										Kore'Art
									</a>
								</h1>
							</div>
							<div class="nav-menu">
								<ul>
									<li>
										<Link
											to="/login"
											className="nav-element"
											style={{ textDecoration: "none" }}
										>
											Login
										</Link>
									</li>
									<li>
										<Link
											to="/signup"
											className="nav-element"
											style={{ textDecoration: "none" }}
										>
											Signup
										</Link>
									</li>

									<li>
										<Link
											to="/"
											className="nav-element"
											style={{ textDecoration: "none" }}
										>
											Home
										</Link>
									</li>

									<li>
										<Link
											to="/contact"
											className="nav-element"
											style={{ textDecoration: "none" }}
										>
											Contact
										</Link>
									</li>
									<li>
										<Link
											to="/search"
											className="nav-element"
											style={{ textDecoration: "none" }}
										>
											Search
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			);
		} else {
			// when your is logged in!
			return (
				<div>
					<nav className="nav-style">
						<div className="nav">
							<div className="nav-title">
								<h1>
									{" "}
									<a className="homeTitle" href="/">
										Kore'Art
									</a>
								</h1>
							</div>

							<div class="nav-menu">
								<ul>
									<li>
										{/* profile page -> when refresh the page, doesnt work*/}
										<Link
											to="/profile"
											className="nav-element"
											style={{ textDecoration: "none" }}
										>
											Profile
										</Link>
									</li>
									<li>
										<Link
											to="/"
											className="nav-element"
											style={{ textDecoration: "none" }}
										>
											Home
										</Link>
									</li>

									<li>
										<Link
											to="/contact"
											className="nav-element"
											style={{ textDecoration: "none" }}
										>
											Contact
										</Link>
									</li>
									<li>
										<Link
											to="/search"
											className="nav-element"
											style={{ textDecoration: "none" }}
										>
											Search
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			);
		}
	}
}

export default Navbar;
