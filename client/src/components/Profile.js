import Popin from "../Popin.js";
import authService from "./auth-service.js";
import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
	state = {
		data: [],
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

	loadMore = () => {
		this.setState(
			(prevState) => ({
				scrolling: true,
			}),
			this.loadData
		);
	};

	componentDidMount() {
		this.loadData();
	}

	render() {
		if (this.props.user === false)
			return "You should loggedin to aceess your profile!";
		else {
			if (!this.props.user._id) return "loading...";
		}
		return (
			<div className="clearfix">
				<div className="row">
					{this.state.data.map((data) => (
						<div className="col-md-4 animated fadeIn" key={data.id.value}>
							<div className="card">
								<div className="card-body">
									<div className="avatar">
										<img
											src={data.picture.large}
											className="card-img-top"
											alt=""
										/>
									</div>

									<>
										<Popin
											one={
												<>
													<h1>Profile</h1>

													<h5 className="card-title">
														<p>
															<em>Name:</em>
															<span>
																{this.uppercase(this.props.user.firstname)}
															</span>
														</p>
													</h5>
													<p className="card-text">
														<em>Email:</em>
														<span>{this.uppercase(this.props.user.email)}</span>
													</p>

													<p className="card-text">
														<em>City:</em>
														<span>{this.uppercase(this.props.user.city)}</span>
													</p>

													<p className="card-text">
														<em>My whishlist:</em>

														{this.props.user.favorites.map((workart) => {
															return <span>{workart.name}</span>;
														})}
													</p>

													<div className="cta">
														<button
															className="btn logout"
															onClick={this.logout}
														>
															logout
														</button>
													</div>
													<div></div>
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
