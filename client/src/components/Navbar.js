//components/navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//on peut acceder ->this.props.user
class Navbar extends React.Component {
	componentDidUpdate(prevProps, prevState) {
		if (this.props.user !== prevProps.user) {
			console.log("the user state has changed");
		}
	}
	render() {
		if (!this.props.user) {
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
