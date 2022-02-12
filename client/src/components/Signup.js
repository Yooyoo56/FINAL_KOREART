import React from "react";
import { Link } from "react-router-dom";
import Popin from "../Popin.js";
import authService from "./auth-service.js";

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
			.then(() => {
				this.setState({ error: "" });

				// 2. then, update with user infos
				// edit => didn't exit-> need to change
				/*
				authService
					
					.edit(
						this.state.email,
						this.state.password,
						this.state.firstname,
						this.state.city
					)
					
					.then((response) => {
						this.setState({ error: "" });

						this.props.updateUser(response);
						this.props.history.push("/");
					})
					.catch((err) => this.setState({ error: err.response.data.message }));
					*/
			})
			.catch((err) => {
				this.setState({ error: err.response.data.errorMessage });
			});
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<Popin
				one={
					<>
						<h1>Sign up</h1>

						{this.state.error && <h2 className="error">{this.state.error}</h2>}
						<form onSubmit={this.handleSubmit}>
							<p>
								<label>
									<em>Email</em>
									<input
										type="text"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
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
									/>
								</label>
							</p>
						</form>

						<p>
							<small>
								If you already have an account, you can login from{" "}
								<Link to="/login">here</Link>
							</small>
						</p>
					</>
				}
				two={
					<>
						<p>
							<strong>Hello!!</strong>
							Welcome to KoreArt profile!
						</p>

						<p>
							<small>
								If you signup, you agree with all our terms and conditions where
								we can do whatever we want with the data!
							</small>
							<button className="btn" onClick={this.handleSubmit}>
								Create the account
							</button>
						</p>
					</>
				}
			/>
		);
	}
}
export default Signup;
