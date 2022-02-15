import React from "react";

import { Link } from "react-router-dom";

import Popin from "../Popin.js";
import authService from "./auth-service.js";

class Login extends React.Component {
	state = {
		email: "",
		password: "",

		error: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();

		authService
			.login(this.state.email, this.state.password)
			.then((response) => {
				this.setState({ error: "" });

				console.log("before update user",this.props.history)
				this.props.updateUser(response);
				this.props.history.push("/profile");
				console.log("after update user",this.props.history)
			})
			.catch((err) => this.setState({ error: err.response.data.errorMessage }));
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		console.log("from render login",this.props.history)

		return (
			<Popin
				one={
					<>
						<h1>Log in</h1>
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
									<em>Password</em>
									<input
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</label>
							</p>
						</form>

						<p>
							<small>
								If you don't have an account yet, you can create your account{" "}
								<Link to="/signup">here</Link>
							</small>
						</p>
					</>
				}
				two={
					<>
						<p>
							<small>
								If you login, you agree with all our terms and conditions where
								we can do whatever we want with the data!
							</small>
							<button className="btn" onClick={this.handleSubmit}>
								Log in
							</button>
						</p>
					</>
				}
			/>
		);
	}
}

export default Login;
