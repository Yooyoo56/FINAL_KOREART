import Popin from "../Popin.js";
import authService from "./auth-service.js";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import profileImg from "../components/carousel/profile.png";

class Profile extends Component {
	state = {
		data: [],
		mood: 0,
		per: 1,
		page: 1,
		total_pages: null,
	};

	/**protection -> logout */
	logout = (event) => {
		authService.logout().then((response) => {
			this.props.updateUser(false);
		});
	};

	moodChanger = (event) => {
		this.setState({
			mood: Math.round(7 * Math.random()),
		});
	};

	/**Uppercase the word */
	uppercase = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	/**load the data j */
	loadData = () => {
		const { per, data } = this.state;
		const endpoint = `https://randomuser.me/api/?nat=us&results=${per}`;
		fetch(endpoint)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					data: [...data, ...json.results],
					scrolling: false,
					total_pages: json.info.results,
				});
			});
	};

	componentDidMount() {
		this.loadData();
	}

	render() {
		let changer;
		if (this.state.mood % 2) {
			changer = "😍";
		} else if (this.state.mood % 3) {
			changer = "😂";
		} else if (this.state.mood % 5) {
			changer = "🤯";
		} else {
			changer = "🤓";
		}

		if (this.props.user === false)
			return (
				<div>
					<br></br>
					<h3 className="auth-h3">
						You're logged out.
						<br></br>
						You should loggedin to aceess your profile!
					</h3>
					<small>
						Hello there, If you already have an account, you can login from{" "}
						<Link to="/login" className="create-link">
							here
						</Link>
					</small>
				</div>
			);
		else {
			if (!this.props.user._id) return "loading...";
		}
		return (
			<div className="first-section">
				<div className="second-section">
					{this.state.data.map((data) => (
						<div key={data.id.value}>
							<div className="Nocard">
								<div className="card-body">
									<div className="avatar">
										{/*<img src={profileImg}></img> */}
										{/*<img
											src={data.picture.large}
											className="card-img-top"
											alt=""
										/>*/}
									</div>

									<>
										<Popin
											one={
												<>
													<h2 className="auth-h2">Profile</h2>
													<label>
														<p>Choose your mood!</p>
														<span
															className="changer"
															onClick={this.moodChanger}
														>
															{changer}
														</span>

														<h5 className="card-title">
															<p>
																<em>Name: </em>
																<span>
																	{this.uppercase(this.props.user.firstname)}
																</span>
															</p>
														</h5>
														<p className="card-text">
															<em>Email: </em>
															<span>
																{this.uppercase(this.props.user.email)}
															</span>
														</p>

														<p className="card-text">
															<em>City: </em>
															<span>
																{this.uppercase(this.props.user.city)}
															</span>
														</p>

														<p className="card-text">
															<em>My wishlist: </em>
															<ul className="profile-ul">
																{/* Only display 10 favorites - wishlist */}
																{this.props.user.favorites
																	.slice(0, 10)
																	//image de workart
																	.map((workart) => {
																		return (
																			<div key={workart._id}>
																				<div className="workart-div">
																					<img
																						className="workart-img"
																						src={workart.image}
																						alt=""
																					></img>
																					<p>{workart.name}</p>
																				</div>
																			</div>
																		);
																	})}
															</ul>
														</p>
													</label>
													<div className="cta">
														<button
															className="btn-logout"
															onClick={this.logout}
														>
															logout
														</button>
													</div>
												</>
											}
										/>
									</>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Profile;
