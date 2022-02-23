//components/navbar.js
import React from "react";
import { Link } from "react-router-dom";
import authService from "./auth-service.js";
import "./Navbar.css";

//on peut acceder ->this.props.user
class NavbarGuest extends React.Component {
	/*
	componentDidUpdate(prevProps, prevState) {
		if (this.props.user !== prevProps.user) {
			console.log("the user state has changed");
		}
	}*/

	render() {
		{
			return (
				<div>
					<nav className="nav-style">
						<div className="nav">
							<div className="nav-title">
								<h1>Kore'Art</h1>
							</div>
							<div class="nav-menu">
								<ul>
									{/* profile page -> when refresh the page, doesnt work*/}

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
								</ul>
							</div>
						</div>
					</nav>
				</div>
			);
		}
	}
}

export default NavbarGuest;
