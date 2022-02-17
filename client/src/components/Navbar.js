//components/navbar.js
import React from "react";
import { Link } from "react-router-dom";

//on peut acceder ->this.props.user
class Navbar extends React.Component {
	//	componentDidUpdate(prevProps, prevState){
	//		if(this.props.user !== prevProps.user){
	//			this.props.
	//		}
	//	}
	render() {
		//		if (this.props.user === false)
		console.log(this.props.user);
		return (
			<nav className="nav-style">
				<ul>
					<li>
						{this.props.user ? (
							<Link to="/profile" style={{ textDecoration: "none" }}>
								Profile
							</Link>
						) : (
							<Link to="/signup" style={{ textDecoration: "none" }}>
								Profile
							</Link>
						)}
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
				</ul>
			</nav>
		);
	}
}

export default Navbar;
