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

	fetchUser = () => {
		console.log("this state user", this.state.user);
		if (!this.state.user._id) {
			authService
				.loggedin()
				.then((data) => {
					console.log("data", data);
					this.setState({ user: data });
					console.log("navabar=====> user after set state", this.state.user);
				})
				.catch((err) => this.setState({ user: false }));
		} else {
			console.log("user already in the state");
		}
	};

	updateUser = (data) => {
		this.setState({ user: data });
	};

	componentDidMount() {
		this.fetchUser();
	}

	render() {
		console.log("the user is======>", this.state.user);

		// if the user is not logged in
		if (this.state.user === false) {
			return (
				<div>
					<nav className="nav-style">
						<div className="nav">
							<div className="nav-title">
								<h1>Kore'Art</h1>
							</div>
							<div class="nav-menu">
								<ul>
									<li>
										<Link to="/login" style={{ textDecoration: "none" }}>
											Login
										</Link>
									</li>
									<li>
										<Link to="/signup" style={{ textDecoration: "none" }}>
											Signup
										</Link>
									</li>
									<li>
										<Link to="/" style={{ textDecoration: "none" }}>
											Home
										</Link>
									</li>

									<li>
										<Link to="/contact" style={{ textDecoration: "none" }}>
											Contact
										</Link>
									</li>
									<li>
										<Link to="/search" style={{ textDecoration: "none" }}>
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
								<h1>Kore'Art</h1>
							</div>

							<div class="nav-menu">
								<ul>
									<li>
										{/* profile page -> when refresh the page, doesnt work*/}
										<Link to="/profile" style={{ textDecoration: "none" }}>
											Profile
										</Link>
									</li>
									<li>
										<Link to="/" style={{ textDecoration: "none" }}>
											Home
										</Link>
									</li>

									<li>
										<Link to="/contact" style={{ textDecoration: "none" }}>
											Contact
										</Link>
									</li>
									<li>
										<Link to="/search" style={{ textDecoration: "none" }}>
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
