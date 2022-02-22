//components/navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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

				<div className="nav">

					<div className="nav-title">
						<h1>Kore'Art</h1>
					</div>
			
			
					<div class="nav-menu">
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
					
					</div>

			</div>
			</nav>
		);
	}
}

export default Navbar;


/*
<div class="nav">
	<div class="nav-title">
		<h1>Web Zone</h1>
	</div>

	<div class="nav-menu">
		<ul>
			<li>Home</li>
			<li>Blog</li>
			<li>Services</li>
			<li>Demo</li>
			<li>About</li>
		</ul>
	</div>
</div>

*/