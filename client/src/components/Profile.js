import React from "react";
import Popin from "../Popin.js";
import authService from "./auth-service.js";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
	logout = (event) => {
		authService.logout().then((response) => {
			this.props.updateUser(false);
		});
	};

	render() {
		if (this.props.user === false) return <Redirect to="/" />;
		else {
			return (
				<>
					<Popin
						one={
							<>
								<h1>Profile</h1>
								<p>
									<em>Email:</em>
									<span>{this.props.user.email}</span>
								</p>
								<p>
									<em>Name:</em>
									<span>{this.props.user.firstname}</span>
								</p>
								<p>
									<em>City:</em>
									<span>{this.props.user.city}</span>
								</p>
								<div className="cta">
									<button className="btn logout" onClick={this.logout}>
										<a href="/">logout</a>
									</button>
								</div>
							</>
						}
						two={
							<>
								<p>
									<small>
										The user is able to upload a new profile photo, using NodeJS
										and Multer uploader.
									</small>
								</p>
							</>
						}
					/>
				</>
			);
		}
	}
}

export default Profile;
