//components/navbar.js
import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
	return (
		<nav className="nav-style">
			<ul>
				<li>
					<Link to="/" style={{ textDecoration: "none" }}>
						Homepage
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
			</ul>
		</nav>
	);
};

export default navbar;
