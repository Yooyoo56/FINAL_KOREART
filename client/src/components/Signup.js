import React from "react";
import { Link } from "react-router-dom";
import Popin from "../Popin.js";
import authService from "./auth-service.js";
import "./Login.css";

class Signup extends React.Component {
	state = {
		email: "",
		password: "",
		firstname: "",
		city: "",

		error: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();

		// 1. Signup
		authService
			.signup(
				this.state.email,
				this.state.password,
				this.state.firstname,
				this.state.city
			)
			// 2. then, update with user infos
			.then((data) => {
				console.log("ouiiiii", data);
				this.setState({ error: "" });

				// maj le state du user avec les infos retournees par le signup
				this.props.updateUser(data);

				this.props.history.push("/profile");
			})

			.catch((err) => {
				console.log("noooooo");
				this.setState({ error: err.response.data.errorMessage });
			});
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="first-section">
				<div className="second-sections">
					<Popin
						one={
							<>
								<h1 className="auth-h1">Sign up</h1>

								{this.state.error && (
									<h2 className="error">{this.state.error}</h2>
								)}
								<form onSubmit={this.handleSubmit}>
									<p>
										<label>
											<em>Email</em>
											<input
												type="text"
												name="email"
												value={this.state.email}
												onChange={this.handleChange}
												placeholder="example@jdoe.com"
											/>
										</label>
									</p>
									<p>
										<label>
											<em>Firstname</em>
											<input
												type="text"
												name="firstname"
												value={this.state.firstname}
												onChange={this.handleChange}
												placeholder="John"
											/>
										</label>
									</p>
									<p>
										<label>
											<em>Password</em>
											<input
												type="password"
												name="password"
												value={this.state.password}
												onChange={this.handleChange}
												placeholder="your password"
											/>
										</label>
									</p>
									<p>
										<label>
											<em>City</em>
											<input
												type="text"
												name="city"
												value={this.state.city}
												onChange={this.handleChange}
												placeholder="your city"
											/>
										</label>
									</p>
								</form>
								<button className="btn-login" onClick={this.handleSubmit}>
									Create the account
								</button>
								<p>
									<small>
										Hello there, If you already have an account, you can login
										from{" "}
										<Link to="/login" className="create-link">
											here
										</Link>
									</small>
								</p>
							</>
						}
						two={
							<>
								<p>
									{/**
							<small>
										If you signup, you agree with all our terms and conditions
										where we can do whatever we want with the data!
									</small> */}
								</p>
							</>
						}
					/>
				</div>
			</div>
		);
	}
}
export default Signup;
