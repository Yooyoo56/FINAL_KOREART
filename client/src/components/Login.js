import React from "react";
import { Link } from "react-router-dom";
import Popin from "../Popin.js";
import authService from "./auth-service";
import "./Login.css";

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

				console.log("before update user", this.props.history);
				this.props.updateUser(response);
				this.props.history.push("/profile");
				console.log("after update user", this.props.history);
			})
			// changed the catch message but I don't think the problem came here.
			.catch((error) => {
				if (!error.response) {
					// network error
					this.errorStatus = "Error: Network Error";
				} else {
					this.errorStatus = error.response.data.errorMessage;
				}
			});
		//.catch((err) => this.setState({ error: err.response.data.errorMessage }));
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		console.log("from render login", this.props.history);

		return (
			<div className="first-section">
				<div className="second-section">
					<Popin
						one={
							<div className="login-section">
								<h1 className="auth-h1">Log in</h1>
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
								</form>

								<button className="btn-login" onClick={this.handleSubmit}>
									Log in
								</button>

								<p>
									<small>
										If you don't have an account yet, you can create your
										account <Link to="/signup">here</Link>
									</small>
								</p>
							</div>
						}

						//	two={
						//		<>
						//			<p>
						//				<small>
						//				If you login, you agree with all our terms and conditions
						//					where we can do whatever we want with the data!
						//				</small>
						//				<button className="btn" onClick={this.handleSubmit}>
						//					Log in
						///				</button>
						//			</p>
						//		</>
					/>
				</div>
				{/**Nice to have  
			
				*/}
			</div>
		);
	}
}

export default Login;
