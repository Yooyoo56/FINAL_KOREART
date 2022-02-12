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

<<<<<<< HEAD
		authService
			.login(this.state.email, this.state.password)
			.then((response) => {
				this.setState({ error: "" });

				this.props.updateUser(response);
				this.props.history.push("/profile");
			})
			.catch((err) => this.setState({ error: err.response.data.errorMessage }));
	};
=======
    authService.login(this.state.email, this.state.password)
      .then(response => {
        this.setState({error: ""});
        console.log("response:",response)
        this.props.updateUser(response);
        this.props.history.push('/profile');
      })
      .catch(err => this.setState({error: err.response.data.errorMessage}))
      if (this.setState === undefined){
        return;
      }
    ;
  }
>>>>>>> 16fe708bd0d1ec61815e78bfd4c21493026e65dc

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

<<<<<<< HEAD
	render() {
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
=======
  render() {
    return (
      <Popin one={(
        <>
          <h1>Log in</h1>
          {this.state.error && <h2 className="error">{this.state.error}</h2>}
          <form onSubmit={this.handleSubmit}>
>>>>>>> 16fe708bd0d1ec61815e78bfd4c21493026e65dc

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
							<strong>Hello!!</strong>
							Awesome to have at IronProfile again!
						</p>

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
