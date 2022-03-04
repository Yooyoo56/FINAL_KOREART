import React, { Component, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";

class WorkartDetails extends Component {
	state = {
		counter: 0,
		workart: {},
	};
	// monter le composant single artist
	componentDidMount() {
		this.getSingleWorkart();
	}
	//
	getSingleWorkart = () => {
		const { params } = this.props.match;
		axios
			.get(`${process.env.REACT_APP_APIURL || ""}/api/workarts/${params.id}`)
			.then((responseFromApi) => {
				const theWorkart = responseFromApi.data;
				console.log("the workart===>", theWorkart);
				this.setState({ workart: theWorkart });
			})
			.catch((err) => {
				console.log("Error while fetching workart", err);
			});
	};
	addFavorite = () => {
		const { params } = this.props.match;
		axios
			.put(
				`${process.env.REACT_APP_APIURL || ""}/api/add/${params.id}/favorite`,
				{},
				{ withCredentials: true }
			)

			.then((res) => {
				console.log(res.data);
				this.setState({ counter: this.state.counter + 1 });
				this.props.updateUser(res.data.updatedUser);
				{
					/** add css Swal */
				}
				Swal.fire({
					title: "Artwork is on your wishlist!",
					showClass: {
						popup: "animate__animated animate__fadeInDown",
					},
					hideClass: {
						popup: "animate__animated animate__fadeOutUp",
					},
				});
			})
			.catch((err) => {
				{
					/** css for the alert button */
				}
				Swal.fire({
					position: "center",
					icon: "info",
					title: "Need to login to add artwork as favorite!",
					showConfirmButton: false,
					timer: 2000,
				});
				console.log(err);
			});
	};
	removeFavorite = () => {
		const { params } = this.props.match;
		axios
			.put(
				`${process.env.REACT_APP_APIURL || ""}/api/delete/${
					params.id
				}/favorite`,
				{},
				{ withCredentials: true }
			)
			.then((res) => {
				console.log(res.data);
				{
					/** css for the alert button */
				}
				Swal.fire({
					position: "center",
					icon: "success",
					title: "This artwork has been removed from your wishlist!",
					showConfirmButton: false,
					timer: 2000,
				});

				this.setState({ counter: this.state.counter - 1 });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div>
				{/*base du cours
        <div>this is the artist detail</div>
        <h1>{this.state.workart.name}</h1>
        <p>{this.state.workart.description}</p>
        */}

				{
					// <button onClick={() => this.addFavorite()}>étoile2</button>
				}
				<div id="page">
					<div className="card-class">
						<div className="half half-left">
							<div className="img-container">
								<img src={this.state.workart.image} alt="" />
							</div>
						</div>
						<div className="half half-right">
							<h2 className="name">{this.state.workart.name}</h2>
							<div className="my-button">
								{this.state.counter === 1 ? (
									<div>
										<button
											className="heart"
											onClick={() => this.removeFavorite()}
										>
											♥︎
										</button>
										{/*	<p>
											The workart has been added to your favorites collection.
										</p>*/}
									</div>
								) : (
									<button className="heart" onClick={() => this.addFavorite()}>
										♡
									</button>
								)}
							</div>
							<h3 className="bio">Infos</h3>

							<p>Year : {this.state.workart.description}</p>
							<p>Type : {this.state.workart.type}</p>

							<h3 className="location">price</h3>

							<p>
								{this.state.workart.price_workart?.value}{" "}
								{this.state.workart.price_workart?.currency}
							</p>

							<p></p>
							{/*
        <WorkartByArtist getData={() => this.getWorkartByArtist()}/> {/* <== !!!*/}
							<Link to={"/workarts"} className="create-link">
								{" "}
								>> Go back and discover more artworks{" "}
							</Link>
						</div>
						<div class="triangle">
							{/*
							<ul>
								<li></li>
							</ul>
							*/}
							<span>
								Kore'art is a fictive project for learning purpose only. We have
								no connection with the artist below
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default WorkartDetails;
